export default {
  all: () => [{ slug: '/' }],
  permalink: '/',
  data: ({ request }) => {
    return {
      communityName: 'Heritage at Stonebridge',
      location: 'Summerlin, Las Vegas',
      totalHomes: 847,
      medianPrice: 1250000,
      hero: {
        title: "Heritage at Stonebridge",
        subtitle: "Luxury Living in the Heart of Summerlin",
        description: "Discover your dream home in one of Las Vegas's most prestigious master-planned communities. Experience the perfect blend of luxury, comfort, and convenience.",
        backgroundImage: "/images/hero/stonebridge-hero.jpg"
      },
      community: {
        name: "Heritage at Stonebridge",
        location: "Summerlin, Las Vegas, NV",
        description: "A premier gated community offering luxury homes with stunning mountain and valley views.",
        stats: [
          { label: "Total Homes", value: "847" },
          { label: "Year Built", value: "2015-2020" },
          { label: "Home Types", value: "Single Family & Townhomes" },
          { label: "Price Range", value: "$800K - $2.5M" }
        ]
      },
      featuredHomes: [
        {
          id: "hs-001",
          address: "123 Heritage Way",
          price: 525000,
          bedrooms: 4,
          bathrooms: 3,
          squareFeet: 2450,
          image: "/images/homes/hs-001-featured.jpg",
          status: "Available"
        },
        {
          id: "hs-002",
          address: "456 Stonebridge Dr",
          price: 485000,
          bedrooms: 3,
          bathrooms: 2.5,
          squareFeet: 2100,
          image: "/images/homes/hs-002-featured.jpg",
          status: "Available"
        },
        {
          id: "hs-003",
          address: "789 Heritage Lane",
          price: 675000,
          bedrooms: 5,
          bathrooms: 4,
          squareFeet: 3200,
          image: "/images/homes/hs-003-featured.jpg",
          status: "Available"
        }
      ],
      amenities: [
        'Resort-style pool and spa',
        'Championship golf course access',
        'Fitness center and tennis courts',
        'Gated community with 24/7 security',
        'Walking trails and parks'
      ],
      agent: {
        name: "Dr. Jan Duffy",
        title: "Real Estate Professional",
        phone: "702-222-1964",
        email: "jan.duffy@heritagestonebridge.com",
        image: "/images/agent/jan-duffy.jpg"
      }
    };
  }
};
