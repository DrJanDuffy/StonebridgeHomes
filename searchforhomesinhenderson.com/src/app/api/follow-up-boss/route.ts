import { type NextRequest, NextResponse } from 'next/server'

const FOLLOW_UP_BOSS_API_KEY = 'fka_0N4mnNW7Q94BLjEMKvoC0Lz9bYtIH0dU5c'
const FOLLOW_UP_BOSS_API_URL = 'https://api.followupboss.com/v1'

interface ContactData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  source: string
  leadType: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactData = await request.json()

    // Validate required fields
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create contact in Follow Up Boss
    const contactData = {
      people: [
        {
          firstName: body.firstName,
          lastName: body.lastName,
          emails: [{ value: body.email, type: 'work' }],
          phones: body.phone ? [{ value: body.phone, type: 'work' }] : [],
          tags: [body.leadType, body.source, 'Henderson Real Estate'],
          customFields: {
            'Lead Source': body.source,
            'Lead Type': body.leadType,
            Message: body.message,
            Location: 'Henderson, Nevada',
          },
        },
      ],
    }

    const response = await fetch(`${FOLLOW_UP_BOSS_API_URL}/people`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${FOLLOW_UP_BOSS_API_KEY}:`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Follow Up Boss API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to create contact in Follow Up Boss' },
        { status: 500 }
      )
    }

    const result = await response.json()

    // Log successful contact creation
    console.log('Contact created in Follow Up Boss:', result)

    return NextResponse.json({
      success: true,
      message: 'Contact created successfully',
      contactId: result.people?.[0]?.id,
    })
  } catch (error) {
    console.error('Error in Follow Up Boss API route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
