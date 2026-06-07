/**
 * Henderson Real Estate FAQs
 * Optimized for AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization)
 * Updated: 2026-06 for AI citation and semantic search
 *
 * Each answer follows 2026 best practices:
 * - 40-60 word direct answers for AI citation
 * - Factual, structured content
 * - Clear, retrieval-friendly phrasing
 */

export interface FAQ {
  question: string
  /** Direct 40-60 word answer optimized for AI citation */
  answer: string
  /** Extended detail for human readers */
  extendedAnswer?: string
  category: 'buying' | 'selling' | 'neighborhoods' | 'market' | 'services'
  /** Keywords for semantic relevance */
  keywords: string[]
  lastUpdated: string
}

const PHONE = '(702) 500-1064'

export const hendersonFAQs: FAQ[] = [
  {
    question: 'What is the average home price in Henderson, Nevada?',
    answer: `Henderson home prices range from $400,000 in Whitney Ranch to over $1.2 million in Green Valley. Most properties sell between $500,000-$800,000. The median home price in Henderson is approximately $650,000 as of 2026, with prices varying significantly by neighborhood and property type.`,
    extendedAnswer: `Henderson's real estate market offers diverse price points across different neighborhoods. Whitney Ranch and Stephanie Ranch provide more affordable entry points ($400K-$650K), while Green Valley and Seven Hills command premium prices ($750K-$1.2M+). Anthem falls in the middle range ($650K-$950K). Market conditions fluctuate seasonally, with spring typically seeing higher prices. Contact ${PHONE} for current pricing in your target neighborhood.`,
    category: 'market',
    keywords: ['Henderson home prices', 'median home price Henderson', 'Nevada real estate prices', 'Henderson property values'],
    lastUpdated: '2026-06'
  },
  {
    question: 'Which Henderson neighborhood is best for families?',
    answer: `Stephanie Ranch and Whitney Ranch are best for families seeking affordability and excellent schools, with homes $450K-$650K. Green Valley offers luxury family living with top-rated schools and resort amenities at $750K-$1.2M. All three neighborhoods feature family-friendly parks, recreation, and high-performing Clark County schools.`,
    extendedAnswer: `Family-friendly Henderson neighborhoods each offer unique advantages. Stephanie Ranch provides newer construction, excellent elementary schools, and Whitney Mesa Recreation Area access. Whitney Ranch features mature landscaping, established communities, and affordable pricing. Green Valley delivers luxury amenities, championship golf courses, and the highest-rated schools in the district. Consider your budget, school priorities, and lifestyle preferences when choosing. Schedule a neighborhood tour at ${PHONE}.`,
    category: 'neighborhoods',
    keywords: ['best Henderson neighborhoods for families', 'Henderson family communities', 'Henderson schools', 'family-friendly Henderson'],
    lastUpdated: '2026-06'
  },
  {
    question: 'How do I get pre-approved for a mortgage in Henderson?',
    answer: `Contact a Nevada-licensed lender for mortgage pre-approval before house hunting. You will need recent pay stubs, tax returns, bank statements, and credit authorization. Pre-approval typically takes 1-3 days and shows sellers you are a qualified buyer, strengthening your offer in competitive Henderson markets.`,
    extendedAnswer: `Getting pre-approved involves submitting financial documentation to a lender who evaluates your income, assets, debts, and credit score. In Henderson's competitive market, pre-approval is essential - sellers often prioritize pre-approved buyers, especially for homes under $700K that receive multiple offers. Work with Nevada lenders who understand local market conditions and HOA requirements. We can recommend trusted local lenders. Call ${PHONE} for lender referrals and home buying guidance.`,
    category: 'buying',
    keywords: ['Henderson mortgage pre-approval', 'home loan Henderson', 'Nevada mortgage process', 'pre-approval requirements'],
    lastUpdated: '2026-06'
  },
  {
    question: 'What are the best schools in Henderson, Nevada?',
    answer: `Henderson's top-rated schools include Green Valley High School, Coronado High School, and multiple elementary schools rated 8+ on GreatSchools. The Green Valley area consistently produces the highest test scores. Stephanie Ranch and Whitney Ranch also offer access to well-performing Clark County School District campuses with strong STEM programs.`,
    extendedAnswer: `School quality is a primary factor for Henderson home buyers. Green Valley High School and Coronado High School are consistently ranked among Nevada's best public high schools. Elementary schools like Vanderburg Elementary, Mitchell Elementary, and Burkholder Middle School receive high ratings. Many Henderson communities feature magnet programs, gifted and talented tracks, and International Baccalaureate options. School boundaries can significantly impact home values - homes in top school zones often command 10-15% premiums. Research current school assignments before purchasing. Contact ${PHONE} for school-specific home searches.`,
    category: 'neighborhoods',
    keywords: ['Henderson schools', 'best schools Henderson Nevada', 'Green Valley High School', 'Henderson school ratings'],
    lastUpdated: '2026-06'
  },
  {
    question: 'Are there golf course communities in Henderson?',
    answer: `Yes, Henderson features premier golf course communities including Anthem Country Club, DragonRidge Country Club, and The Legacy Golf Club. Green Valley offers multiple golf course properties with homes ranging $750K-$2M+. These communities provide championship courses, clubhouses, and resort-style amenities with HOA fees typically $200-$500 monthly.`,
    extendedAnswer: `Henderson is renowned for golf course living. Anthem Country Club features an 18-hole championship course designed by Hale Irwin with stunning valley views. DragonRidge offers an ultra-luxury experience with homes often exceeding $1.5M. The Legacy Golf Club and Revere Golf Club provide additional options. Golf course homes typically include larger lots, premium finishes, and access to country club amenities. Note that most require club memberships or golf usage fees separate from HOA dues. Schedule golf community tours at ${PHONE}.`,
    category: 'neighborhoods',
    keywords: ['Henderson golf communities', 'Anthem Country Club', 'golf course homes Henderson', 'DragonRidge Henderson'],
    lastUpdated: '2026-06'
  },
  {
    question: 'What is the difference between Green Valley and Anthem?',
    answer: `Green Valley is an established master-planned community with mature landscaping, closer proximity to shopping and dining, and homes $750K-$1.2M. Anthem is newer with modern construction, hillside locations offering panoramic views, larger lots, and homes $650K-$950K. Both offer excellent schools and resort amenities but different lifestyle experiences.`,
    extendedAnswer: `Green Valley, developed in the 1980s-1990s, features lush mature trees, convenient access to The District shopping center, and a more urban-suburban feel. Home styles range from Mediterranean to contemporary with established neighborhoods and predictable resale values. Anthem, developed in the 1990s-2000s, sits on elevated terrain with stunning Las Vegas Valley and mountain views. Homes are generally newer with open floor plans and energy-efficient construction. Anthem feels more spacious and suburban. Green Valley suits buyers wanting walkability and convenience; Anthem appeals to those seeking views and newer construction. Both have excellent resale demand. Compare both at ${PHONE}.`,
    category: 'neighborhoods',
    keywords: ['Green Valley vs Anthem', 'Henderson neighborhoods comparison', 'Anthem Henderson', 'Green Valley Henderson'],
    lastUpdated: '2026-06'
  },
  {
    question: 'Is Henderson a good place to invest in real estate?',
    answer: `Yes, Henderson offers strong real estate investment potential with consistent 4-6% annual appreciation, growing population, low property taxes, and diverse rental demand. The city attracts corporate relocations, retirees, and families, creating stable tenant pools. Rental yields average 5-7% for single-family homes in established neighborhoods.`,
    extendedAnswer: `Henderson investment properties benefit from multiple factors: Nevada's business-friendly environment attracts corporate relocations (increasing rental demand), the city's award-winning safety and schools draw long-term residents, and proximity to Las Vegas provides employment diversity. Single-family rentals in Whitney Ranch and Stephanie Ranch ($400K-$550K purchase price) generate $2,200-$2,800 monthly rent. Luxury Green Valley rentals can exceed $4,000 monthly. Consider HOA rules - many restrict short-term rentals but allow long-term leases. Property management costs run 8-10% of rent. Schedule an investment property consultation at ${PHONE}.`,
    category: 'market',
    keywords: ['Henderson real estate investment', 'Henderson rental properties', 'Nevada real estate investing', 'Henderson property ROI'],
    lastUpdated: '2026-06'
  },
  {
    question: 'What is the current real estate market trend in Henderson?',
    answer: `Henderson's 2026 market shows balanced conditions with 2-3 months of inventory, steady 3-5% annual appreciation, and average 30-45 day time on market. Well-priced homes under $700K receive multiple offers, while luxury properties ($1M+) experience longer sale times. Interest rates and seasonal factors significantly impact market dynamics.`,
    extendedAnswer: `The Henderson market has stabilized after the rapid appreciation of 2020-2022. Current trends show selective buyer activity - homes priced correctly sell within 30-45 days, while overpriced listings sit for 60+ days. The under-$600K segment remains competitive with multiple offers common. Luxury ($1M+) buyers are more cautious, negotiating repairs and price reductions. New construction continues in North Henderson and near Lake Las Vegas. Inventory levels vary by neighborhood and price point. Spring (March-May) typically sees peak activity and prices. Get current market updates and comparative market analysis at ${PHONE}.`,
    category: 'market',
    keywords: ['Henderson market trends 2026', 'Henderson real estate market', 'Henderson housing market', 'Nevada market conditions'],
    lastUpdated: '2026-06'
  },
  {
    question: 'How do I get an accurate home value estimate in Henderson?',
    answer: `Contact a licensed Henderson REALTOR for a Comparative Market Analysis (CMA) using recent sales, active listings, and property-specific factors. Online estimates (Zillow, Redfin) can be 5-15% inaccurate. Professional CMAs consider Henderson's unique factors like HOA amenities, school zones, golf course proximity, and recent neighborhood-specific sales data.`,
    extendedAnswer: `Accurate home valuations require local expertise and current market data. A professional CMA analyzes 3-6 recent comparable sales (similar size, age, condition, location), adjusts for differences (pool, upgrades, lot size), and factors in current market conditions. Henderson-specific variables include HOA amenity quality, elementary school assignments, and proximity to shopping and recreation. Online algorithms cannot account for home condition, upgrades, or micro-location factors. Schedule a free CMA at ${PHONE} - includes detailed market analysis, suggested improvements, and pricing strategy.`,
    category: 'selling',
    keywords: ['Henderson home value', 'home appraisal Henderson', 'CMA Henderson', 'home worth Henderson Nevada'],
    lastUpdated: '2026-06'
  },
  {
    question: 'What home improvements increase value in Henderson?',
    answer: `Kitchen and bathroom updates provide the highest ROI (60-80% return) in Henderson. Desert landscaping, energy-efficient HVAC, and covered outdoor living spaces also add significant value. Smart home features, fresh interior paint, and modern flooring appeal to Henderson buyers. Budget $15K-$40K for impactful updates before selling.`,
    extendedAnswer: `Henderson buyers prioritize updated kitchens (new cabinets, granite/quartz counters, stainless appliances), modernized bathrooms (new vanities, walk-in showers, contemporary tile), and desert-friendly landscaping (drip irrigation, native plants, decorative rock). Given Henderson's climate, energy-efficient features command premiums - new HVAC systems, dual-pane windows, and solar panels attract buyer interest. Outdoor living is crucial - covered patios, outdoor kitchens, and pool upgrades yield strong returns. Avoid over-improving for the neighborhood. Consult with a Henderson REALTOR before major projects. Get personalized improvement recommendations at ${PHONE}.`,
    category: 'selling',
    keywords: ['Henderson home improvements', 'increase home value Henderson', 'best ROI home upgrades', 'Henderson home renovations'],
    lastUpdated: '2026-06'
  },
  {
    question: 'What are HOA fees in Henderson and what do they cover?',
    answer: `Henderson HOA fees range from $50-$150 monthly for basic neighborhoods to $200-$500+ for golf course and resort communities. Fees typically cover landscape maintenance, community amenities (pools, parks, fitness centers), gate security, and common area upkeep. Master-planned communities often have higher fees but include more extensive amenities and services.`,
    extendedAnswer: `HOA fees vary significantly by community type and amenities. Basic neighborhoods ($50-$100/month) cover front yard landscaping and minimal common areas. Mid-tier communities ($150-$250/month) include multiple pools, parks, and event programming. Premium communities like Anthem and Green Valley ($250-$500/month) offer resort-style amenities - multiple pools, spas, fitness centers, tennis courts, and full-time activities directors. Golf course communities may charge $400-$700+ including club access. Always review HOA financial health, reserve funds, and upcoming special assessments. Request HOA documents during home purchase. Get HOA analysis for specific communities at ${PHONE}.`,
    category: 'buying',
    keywords: ['Henderson HOA fees', 'homeowners association Henderson', 'HOA costs Henderson Nevada', 'Henderson community fees'],
    lastUpdated: '2026-06'
  },
  {
    question: 'How long does it take to sell a home in Henderson?',
    answer: `Well-priced Henderson homes average 30-45 days on market in 2026. Homes under $600K in desirable neighborhoods often sell within 10-20 days with multiple offers. Properties $1M+ typically take 60-90 days. Accurate pricing, professional marketing, strong home condition, and seasonal timing significantly impact sale speed.`,
    extendedAnswer: `Sale timelines depend on multiple factors. Correctly priced homes in high-demand areas (Green Valley, Anthem) with good school zones sell quickly. Overpricing by 5-10% can extend time on market to 60+ days and result in price reductions. Home condition matters - updated, clean, well-staged homes sell faster than fixer-uppers. Spring (March-May) sees fastest sales; winter (November-January) slows. Professional photography, 3D tours, and comprehensive marketing accelerate sales. Working with an experienced Henderson agent is crucial - local market knowledge and pricing expertise prevent costly delays. Schedule a home selling consultation at ${PHONE}.`,
    category: 'selling',
    keywords: ['how long to sell Henderson home', 'Henderson home selling timeline', 'time on market Henderson', 'selling house Henderson Nevada'],
    lastUpdated: '2026-06'
  }
]

/**
 * Get FAQs by category for targeted content sections
 */
export function getFAQsByCategory(category: FAQ['category']): FAQ[] {
  return hendersonFAQs.filter(faq => faq.category === category)
}

/**
 * Get FAQs by keyword for semantic search optimization
 */
export function getFAQsByKeyword(keyword: string): FAQ[] {
  const lowerKeyword = keyword.toLowerCase()
  return hendersonFAQs.filter(faq =>
    faq.keywords.some(k => k.toLowerCase().includes(lowerKeyword)) ||
    faq.question.toLowerCase().includes(lowerKeyword) ||
    faq.answer.toLowerCase().includes(lowerKeyword)
  )
}

/**
 * Generate WebPage schema for FAQ section (2026 compliant - no FAQPage)
 */
export function generateFAQSchema(faqs: FAQ[], pageUrl: string, pageName: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageName,
    url: pageUrl,
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en-US',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
        dateCreated: faq.lastUpdated
      }
    })),
    author: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'Licensed Real Estate Agent',
      knowsAbout: ['Henderson Real Estate', 'Nevada Property Market']
    }
  }
}
