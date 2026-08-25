// High-quality colored brand logos (Devicon), served locally from /public/logos.
// Keyed by the tech names used across the site data.
export const techLogos: Record<string, string> = {
  Python: '/logos/python.svg',
  'C++': '/logos/cpp.svg',
  HTML5: '/logos/html5.svg',
  CSS3: '/logos/css3.svg',
  JavaScript: '/logos/javascript.svg',
  AWS: '/logos/aws.svg',
  Docker: '/logos/docker.svg',
  Kubernetes: '/logos/kubernetes.svg',
  Jenkins: '/logos/jenkins.svg',
  Terraform: '/logos/terraform.svg',
  Ansible: '/logos/ansible.svg',
  Prometheus: '/logos/prometheus.svg',
  Grafana: '/logos/grafana.svg',
  GCP: '/logos/googlecloud.svg',
  Linux: '/logos/linux.svg',
  Helm: '/logos/helm.svg',
  'GitHub Actions': '/logos/github.svg',
  Bash: '/logos/bash.svg',
}

// Ordered logo strip for the marquee (languages → cloud/devops → monitoring).
export const marqueeTech: { name: string; logo: string }[] = [
  { name: 'Python', logo: '/logos/python.svg' },
  { name: 'C++', logo: '/logos/cpp.svg' },
  { name: 'HTML5', logo: '/logos/html5.svg' },
  { name: 'CSS3', logo: '/logos/css3.svg' },
  { name: 'JavaScript', logo: '/logos/javascript.svg' },
  { name: 'AWS', logo: '/logos/aws.svg' },
  { name: 'Docker', logo: '/logos/docker.svg' },
  { name: 'Kubernetes', logo: '/logos/kubernetes.svg' },
  { name: 'Jenkins', logo: '/logos/jenkins.svg' },
  { name: 'Terraform', logo: '/logos/terraform.svg' },
  { name: 'Ansible', logo: '/logos/ansible.svg' },
  { name: 'Prometheus', logo: '/logos/prometheus.svg' },
  { name: 'Grafana', logo: '/logos/grafana.svg' },
  { name: 'Google Cloud', logo: '/logos/googlecloud.svg' },
  { name: 'Linux', logo: '/logos/linux.svg' },
  { name: 'Helm', logo: '/logos/helm.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' },
]
