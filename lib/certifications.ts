export type CertTier = 'Foundational' | 'Associate' | 'Professional' | 'Specialty'

export type Certification = {
  name: string
  tier: CertTier
  url: string
  earned: boolean
}

// Tier gradients (top -> bottom), used as the hexagon fill.
export const TIER_GRADIENTS: Record<CertTier, { from: string; to: string }> = {
  Foundational: { from: '#4B5563', to: '#1F2937' },
  Associate: { from: '#2563EB', to: '#1E40AF' },
  Professional: { from: '#0EA5B7', to: '#0E7490' },
  Specialty: { from: '#7C3AED', to: '#4C1D95' },
}

// All 12 current AWS certifications. `earned: true` for exactly the three held.
export const certifications: Certification[] = [
  // Foundational
  {
    name: 'AWS Certified Cloud Practitioner',
    tier: 'Foundational',
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    earned: true,
  },
  {
    name: 'AWS Certified AI Practitioner',
    tier: 'Foundational',
    url: 'https://aws.amazon.com/certification/certified-ai-practitioner/',
    earned: true,
  },
  // Associate
  {
    name: 'AWS Certified Solutions Architect – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    earned: true,
  },
  {
    name: 'AWS Certified Machine Learning Engineer – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/',
    earned: false,
  },
  {
    name: 'AWS Certified CloudOps Engineer – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-cloudops-engineer-associate/',
    earned: false,
  },
  {
    name: 'AWS Certified Developer – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-developer-associate/',
    earned: false,
  },
  {
    name: 'AWS Certified Data Engineer – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-data-engineer-associate/',
    earned: false,
  },
  // Professional
  {
    name: 'AWS Certified DevOps Engineer – Professional',
    tier: 'Professional',
    url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
    earned: false,
  },
  {
    name: 'AWS Certified Solutions Architect – Professional',
    tier: 'Professional',
    url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    earned: false,
  },
  // Specialty
  {
    name: 'AWS Certified Machine Learning – Specialty',
    tier: 'Specialty',
    url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
    earned: false,
  },
  {
    name: 'AWS Certified Advanced Networking – Specialty',
    tier: 'Specialty',
    url: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/',
    earned: false,
  },
  {
    name: 'AWS Certified Security – Specialty',
    tier: 'Specialty',
    url: 'https://aws.amazon.com/certification/certified-security-specialty/',
    earned: false,
  },
]

export const earnedCount = certifications.filter((c) => c.earned).length
export const totalCount = certifications.length
