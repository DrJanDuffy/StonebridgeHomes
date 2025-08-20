import { type NextRequest, NextResponse } from 'next/server'
import { config } from '@/lib/config'

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
    // Check if API key is configured
    if (!config.followUpBoss.apiKey) {
      console.error('Follow Up Boss API key not configured')
      return NextResponse.json(
        { error: 'Contact service temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    // Add rate limiting check (basic implementation)
    const clientIP =
      request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    // TODO: Implement proper rate limiting with Redis or similar

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

    const response = await fetch(`${config.followUpBoss.apiUrl}/people`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${config.followUpBoss.apiKey}:`).toString('base64')}`,
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

    // Log successful contact creation (remove sensitive data)
    console.log('Contact created in Follow Up Boss for:', body.email)

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
