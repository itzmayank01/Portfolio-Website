export const profile = {
  name: 'Mayank Thakur',
  role: 'DevOps & Cloud Engineer',
  tagline: 'Building reliable, secure and automated cloud infrastructure.',
  location: 'Dehradun, India',
  email: 'mayankthakur9181@gmail.com',
  phone: '+91 90151 56775',
  linkedin: 'https://linkedin.com/in/mayankthakur1',
  github: 'https://github.com/itzmayank01',
  photo: '/profile.jpg',
  headshot: '/mayank.png',
  summary:
    'I design and automate end-to-end delivery pipelines — from containerized builds and infrastructure-as-code to security scanning and production observability. AWS Certified Solutions Architect focused on shipping fast without breaking things.',
}

export const stats = [
  { value: '85%', label: 'Fewer security vulnerabilities' },
  { value: '50%', label: 'Faster CI/CD pipelines' },
  { value: '99.9%', label: 'Production uptime' },
  { value: '4x', label: 'Cloud certifications' },
]

export type SkillGroup = {
  title: string
  icon: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Cloud & Platforms',
    icon: 'Cloud',
    items: ['AWS', 'GCP', 'Linux', 'Route 53', 'CloudFront'],
  },
  {
    title: 'Containers & Orchestration',
    icon: 'Boxes',
    items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD', 'Amazon ECS/EKS'],
  },
  {
    title: 'Infrastructure as Code',
    icon: 'Server',
    items: ['Terraform', 'Ansible', 'CloudFormation'],
  },
  {
    title: 'CI/CD Automation',
    icon: 'GitBranch',
    items: ['Jenkins', 'GitHub Actions', 'CodePipeline', 'CodeDeploy'],
  },
  {
    title: 'Security & Monitoring',
    icon: 'Shield',
    items: ['Trivy', 'Snyk', 'SonarQube', 'Prometheus', 'Grafana', 'CloudWatch'],
  },
  {
    title: 'Languages & Scripting',
    icon: 'Terminal',
    items: ['Python', 'Bash', 'C++', 'Java', 'Shell'],
  },
]

// Coding stack shown in the marquee
export const techStack = [
  'AWS',
  'Kubernetes',
  'Docker',
  'Terraform',
  'Jenkins',
  'GitHub Actions',
  'ArgoCD',
  'Helm',
  'Ansible',
  'Prometheus',
  'Grafana',
  'Trivy',
  'SonarQube',
  'Python',
  'Bash',
  'Linux',
  'GCP',
]

export type Experience = {
  company: string
  role: string
  period: string
  points: string[]
}

export const experience: Experience[] = [
  {
    company: 'Groove Innovations',
    role: 'DevOps Engineer Intern',
    period: 'May 2026 — Present',
    points: [
      'Automated security vulnerability detection for Docker images and dependencies with Trivy and Snyk, preventing 5+ critical incidents.',
      'Engineered CI/CD pipelines using Docker, AWS, Jenkins, Terraform and GitHub, reducing deployment failures by 30%.',
      'Collaborated with 8+ developers on DevSecOps best practices, cutting security vulnerabilities by 85%.',
    ],
  },
  {
    company: 'F13 Technologies',
    role: 'AWS Cloud Intern',
    period: 'Mar 2026 — May 2026',
    points: [
      'Provisioned and managed 10+ AWS resources (EC2, S3, IAM, VPC) with Terraform, cutting manual provisioning time by 60%.',
      'Built CI/CD pipelines with Jenkins and GitHub Actions, reducing deployment time from 30 to under 10 minutes.',
      'Configured CloudWatch dashboards and alarms for 15+ resources, reducing incident detection time by 50%.',
    ],
  },
  {
    company: 'OctaNet Services Pvt Ltd',
    role: 'Python Developer Intern',
    period: 'Jul 2024 — Aug 2024',
    points: [
      'Built data validation scripts in Python, decreasing data entry errors by 40%.',
      'Integrated 5+ REST APIs and processed JSON datasets of 10,000+ records for BI dashboards.',
    ],
  },
]

export type Project = {
  title: string
  category: string
  status: string
  description: string
  image: string
  device: 'laptop' | 'tablet'
  tech: string[]
  link: string
}

export const projects: Project[] = [
  {
    title: 'Cloud-Native 3-Tier App on AWS EKS',
    category: 'Kubernetes · DevSecOps',
    status: 'Open Source',
    description:
      'End-to-end CI/CD on Amazon EKS with GitHub Actions — automated build, security scanning and production deploy on every merge. Cut pipeline time by 50% with self-hosted runners.',
    image: '/projects/eks-pipeline.png',
    device: 'laptop',
    tech: ['AWS EKS', 'GitHub Actions', 'Trivy', 'SonarQube', 'ALB', 'Route 53'],
    link: 'https://github.com/itzmayank01',
  },
  {
    title: 'Campus Connect — Academic Platform',
    category: 'Cloud Platform',
    status: 'Live',
    description:
      'A cloud-based academic platform serving 500+ users at 99.9% uptime. Provisioned with Terraform and monitored with Prometheus & Grafana for reproducible, observable deployments.',
    image: '/projects/campus-connect.png',
    device: 'tablet',
    tech: ['Terraform', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'PostgreSQL'],
    link: 'https://github.com/itzmayank01',
  },
  {
    title: 'AWS Infrastructure Automation',
    category: 'Infrastructure as Code',
    status: 'Case Study',
    description:
      'Reusable Terraform modules provisioning EC2, S3, IAM and VPC across environments, with CloudWatch observability baked in — reducing manual provisioning effort by 60%.',
    image: '/projects/aws-infra.png',
    device: 'laptop',
    tech: ['Terraform', 'AWS', 'CloudWatch', 'Jenkins', 'IAM'],
    link: 'https://github.com/itzmayank01',
  },
]

export const certifications = [
  {
    title: 'AWS Certified Solutions Architect — Associate',
    issuer: 'Amazon Web Services',
    image: '/badges/aws-solutions-architect-associate.png',
  },
  {
    title: 'Google Cloud Certified — Associate Cloud Engineer',
    issuer: 'Google Cloud',
    image: '/badges/gcp-associate-cloud-engineer.png',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    image: '/badges/aws-cloud-practitioner.png',
  },
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    image: '/badges/aws-ai-practitioner.png',
  },
]

export const education = {
  school: 'University of Petroleum and Energy Studies (UPES), Dehradun',
  degree: 'B.Tech in Computer Science',
  period: 'Aug 2023 — May 2027',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#work' },
  { label: 'GitHub Activity', href: '#activity' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
