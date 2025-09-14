module.exports = {
  all: () => [{ slug: 'contact' }],
  permalink: '/contact',
  data: ({ request }) => {
    return {
      pageTitle: 'Contact Dr. Jan Duffy',
      agent: {
        name: "Dr. Jan Duffy",
        title: "Real Estate Professional",
        phone: "702-222-1964",
        email: "jan.duffy@heritagestonebridge.com",
        image: "/images/agent/jan-duffy.jpg",
        specialties: [
          "Luxury Real Estate",
          "Summerlin Communities",
          "Heritage at Stonebridge",
          "First-Time Buyers",
          "Relocation Services"
        ],
        experience: "15+ years",
        certifications: [
          "Licensed Real Estate Agent",
          "Certified Luxury Home Marketing Specialist",
          "Accredited Buyer's Representative"
        ]
      },
      office: {
        name: "Heritage at Stonebridge Realty",
        address: "123 Heritage Way, Summerlin, Las Vegas, NV 89134",
        hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: By Appointment"
      },
      contactMethods: [
        {
          type: "Phone",
          value: "702-222-1964",
          icon: "📞",
          description: "Call or text for immediate assistance"
        },
        {
          type: "Email",
          value: "jan.duffy@heritagestonebridge.com",
          icon: "✉️",
          description: "Send detailed inquiries and property requests"
        },
        {
          type: "Office",
          value: "123 Heritage Way, Summerlin, NV",
          icon: "🏢",
          description: "Visit our Heritage at Stonebridge office"
        }
      ]
    };
  }
};
