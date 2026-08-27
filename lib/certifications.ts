export type CertTier = 'Foundational' | 'Associate' | 'Professional' | 'Specialty'

export type Certification = {
  name: string
  tier: CertTier
  url: string
  earned: boolean
  image: string
}

// All 12 current AWS certifications. `earned: true` for exactly the three held.
export const certifications: Certification[] = [
  // Foundational
  {
    name: 'AWS Certified Cloud Practitioner',
    tier: 'Foundational',
    url: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    earned: true,
    image: '/aws-badges/cloud-practitioner.png',
  },
  {
    name: 'AWS Certified AI Practitioner',
    tier: 'Foundational',
    url: 'https://aws.amazon.com/certification/certified-ai-practitioner/',
    earned: true,
    image: '/aws-badges/ai-practitioner.png',
  },
  // Associate
  {
    name: 'AWS Certified Solutions Architect – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/',
    earned: true,
    image: '/aws-badges/solutions-architect-associate.png',
  },
  {
    name: 'AWS Certified Machine Learning Engineer – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/',
    earned: false,
    image: '/aws-badges/machine-learning-engineer-associate.png',
  },
  {
    name: 'AWS Certified CloudOps Engineer – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-cloudops-engineer-associate/',
    earned: false,
    image: '/aws-badges/cloudops-engineer-associate.png',
  },
  {
    name: 'AWS Certified Developer – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-developer-associate/',
    earned: false,
    image: '/aws-badges/developer-associate.png',
  },
  {
    name: 'AWS Certified Data Engineer – Associate',
    tier: 'Associate',
    url: 'https://aws.amazon.com/certification/certified-data-engineer-associate/',
    earned: false,
    image: '/aws-badges/data-engineer-associate.png',
  },
  // Professional
  {
    name: 'AWS Certified DevOps Engineer – Professional',
    tier: 'Professional',
    url: 'https://aws.amazon.com/certification/certified-devops-engineer-professional/',
    earned: false,
    image: '/aws-badges/devops-engineer-professional.png',
  },
  {
    name: 'AWS Certified Solutions Architect – Professional',
    tier: 'Professional',
    url: 'https://aws.amazon.com/certification/certified-solutions-architect-professional/',
    earned: false,
    image: '/aws-badges/solutions-architect-professional.png',
  },
  // Specialty
  {
    name: 'AWS Certified Machine Learning – Specialty',
    tier: 'Specialty',
    url: 'https://aws.amazon.com/certification/certified-machine-learning-specialty/',
    earned: false,
    image: '/aws-badges/machine-learning-specialty.png',
  },
  {
    name: 'AWS Certified Advanced Networking – Specialty',
    tier: 'Specialty',
    url: 'https://aws.amazon.com/certification/certified-advanced-networking-specialty/',
    earned: false,
    image: '/aws-badges/advanced-networking-specialty.png',
  },
  {
    name: 'AWS Certified Security – Specialty',
    tier: 'Specialty',
    url: 'https://aws.amazon.com/certification/certified-security-specialty/',
    earned: false,
    image: '/aws-badges/security-specialty.png',
  },
]

export const earnedCount = certifications.filter((c) => c.earned).length
export const totalCount = certifications.length
