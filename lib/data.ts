// Location data
export const locations: Record<string, { city: string; nearby: string[]; description: string }> = {
  davie: { 
    city: 'Davie', 
    nearby: ['Plantation', 'Weston', 'Fort Lauderdale', 'Hollywood'], 
    description: 'Benefique is headquartered in Davie, FL — providing accounting and CFO services to local healthcare practices and service businesses.' 
  },
  plantation: { 
    city: 'Plantation', 
    nearby: ['Davie', 'Fort Lauderdale', 'Weston', 'Sunrise'], 
    description: 'Full-service accounting for Plantation businesses — from medical practices to professional services firms.' 
  },
  weston: { 
    city: 'Weston', 
    nearby: ['Davie', 'Plantation', 'Miramar', 'Southwest Ranches'], 
    description: "Accounting and fractional CFO services for Weston's growing healthcare and service business community." 
  },
  miramar: { 
    city: 'Miramar', 
    nearby: ['Hollywood', 'Pembroke Pines', 'Weston', 'Miami Gardens'], 
    description: 'Real-time accounting and tax planning for Miramar businesses — healthcare, marine services, and more.' 
  },
  'fort-lauderdale': { 
    city: 'Fort Lauderdale', 
    nearby: ['Davie', 'Plantation', 'Hollywood', 'Oakland Park'], 
    description: "Fort Lauderdale's trusted accounting firm for healthcare practices, marine services, and professional services." 
  },
  aventura: { 
    city: 'Aventura', 
    nearby: ['North Miami Beach', 'Sunny Isles', 'Hallandale', 'Miami'], 
    description: 'Accounting and CFO services for Aventura businesses — medical practices, professional services, and hospitality.' 
  },
  hollywood: { 
    city: 'Hollywood', 
    nearby: ['Fort Lauderdale', 'Davie', 'Hallandale', 'Miramar'], 
    description: 'Full-service accounting for Hollywood, FL businesses — from healthcare to marine and hospitality services.' 
  },
}

// Industry data
export interface IndustryData {
  industry: string
  icon: string
  challenges: string[]
  testimonial: {
    quote: string
    name: string
    business: string
  }
}

export const industries: Record<string, IndustryData> = {
  radiology: {
    industry: 'Radiology & Imaging Centers',
    icon: '🏥',
    challenges: [
      'Multi-location financial consolidation',
      'Complex insurance reimbursement tracking',
      'Equipment depreciation and financing',
      'Radiologist compensation structures',
      'HIPAA-compliant financial reporting',
      'Cash flow variability from insurance delays',
    ],
    testimonial: {
      quote: 'Benefique gives us visibility across all our locations. We finally know which centers are performing and which need attention.',
      name: 'Mark',
      business: 'Multi-Location Radiology',
    },
  },
  dental: {
    industry: 'Dental Practices',
    icon: '🦷',
    challenges: [
      'Insurance vs. cash pay revenue tracking',
      'Multi-provider compensation models',
      'Equipment purchases and financing',
      'Associate and hygienist productivity',
      'Practice acquisition accounting',
      'DSO financial reporting requirements',
    ],
    testimonial: {
      quote: 'Complex multi-entity structure, and they keep it all organized. Tax planning alone has saved us significantly.',
      name: 'Eddie',
      business: 'Dental Brokerage',
    },
  },
  veterinary: {
    industry: 'Veterinary Practices',
    icon: '🐾',
    challenges: [
      'Inventory management for pharmaceuticals',
      'Multi-location or mobile practice accounting',
      'Equipment and facility costs',
      'Staff scheduling and payroll complexity',
      'Client payment plans and collections',
      'Emergency vs. routine service profitability',
    ],
    testimonial: {
      quote: 'They handle everything—books, taxes, payroll. I can focus on my patients instead of spreadsheets.',
      name: 'Brandon',
      business: 'Veterinary Practice',
    },
  },
  'marine-services': {
    industry: 'Marine Services',
    icon: '⚓',
    challenges: [
      'Project-based revenue recognition',
      'Seasonal cash flow fluctuations',
      'Large equipment and dock costs',
      'Subcontractor management',
      'Parts inventory tracking',
      'Multi-vessel or multi-location operations',
    ],
    testimonial: {
      quote: 'We went from chaos to clarity. Now I know exactly where we stand financially at any moment.',
      name: 'Kobus',
      business: 'Marine Services',
    },
  },
}
