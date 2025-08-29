export const personalInfo = {
  name: "Prince Kumar",
  title: "Full Stack & Cloud Developer",
  location: "B-9/340, Rohini, Sector-5, Delhi",
  email: "princekumar205086@gmail.com",
  phone: "+91 86779 39971",
  linkedin: "https://linkedin.com/in/princekumar205086",
  github: "https://github.com/princekumar205086",
  portfolio: "https://kumarprince.vercel.app",
  bio: "Detail-oriented Cloud Engineer & Full Stack Developer with 2+ years of experience in cloud infrastructure, DevOps automation, and scalable web applications. Skilled in AWS, Azure, Docker, and CI/CD pipelines, with strong development expertise in React.js, Next.js, Django, and ExpressJS. Adept at optimizing cloud costs, automating deployments, and ensuring system reliability.",
  initials: "PK"
}

export const skills = {
  "Cloud Platforms": [
    { name: "AWS (EC2, S3, RDS, CloudFront)", level: 90 },
    { name: "Azure", level: 85 },
    { name: "DigitalOcean", level: 88 }
  ],
  "DevOps & Tools": [
    { name: "Docker", level: 92 },
    { name: "Kubernetes", level: 75 },
    { name: "CI/CD (GitHub Actions, Jenkins)", level: 88 },
    { name: "Nginx", level: 85 },
    { name: "Apache", level: 80 }
  ],
  "Backend": [
    { name: "Django", level: 90 },
    { name: "ExpressJS", level: 88 },
    { name: "REST APIs", level: 92 },
    { name: "Authentication (JWT, OAuth2)", level: 85 }
  ],
  "Frontend": [
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 88 }
  ],
  "Databases": [
    { name: "PostgreSQL", level: 88 },
    { name: "MongoDB", level: 85 },
    { name: "Prisma", level: 82 }
  ],
  "Languages": [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 92 },
    { name: "Bash scripting", level: 85 },
    { name: "Java", level: 75 }
  ]
}

export const experience = [
  {
    title: "Freelance Cloud Engineer & Full Stack Developer",
    period: "2021 – Present",
    achievements: [
      "Designed and deployed secure cloud infrastructure on AWS and Azure for multiple client projects",
      "Automated deployment pipelines using Docker and GitHub Actions, reducing manual errors by 40%",
      "Optimized cloud resource usage, reducing hosting costs by up to 25%",
      "Integrated monitoring & alerting systems to ensure 99.9% uptime",
      "Collaborated with development teams for DevOps practices and cloud-based solutions"
    ]
  }
]

export const projects = [
  {
    id: 1,
    title: "OKPUJA – Puja & Astrology Booking Platform",
    description: "A comprehensive platform for booking religious ceremonies and astrology consultations with real-time scheduling and payment integration.",
    technologies: ["Next.js", "PostgreSQL", "AWS", "Docker", "SSL", "CI/CD"],
    features: [
      "Deployed application on AWS EC2 with Docker containerization",
      "Integrated SSL certificates and automated CI/CD pipelines",
      "Implemented scalable booking and authentication systems with monitoring",
      "Real-time notifications and payment processing"
    ],
    github: "https://github.com/princekumar205086/okpuja",
    demo: "https://okpuja.com",
    image: "/projects/okpuja.png",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Healthcare E-Commerce Platform",
    description: "A robust e-commerce solution for healthcare products with advanced inventory management and secure payment processing.",
    technologies: ["Django", "AWS S3", "PostgreSQL", "CloudFront", "REST APIs"],
    features: [
      "Built comprehensive REST APIs with Django framework",
      "Deployed backend on AWS with auto-scaling capabilities",
      "Configured CloudFront + S3 for media delivery, improving speed by 30%",
      "Implemented secure payment gateway integration"
    ],
    github: "https://github.com/princekumar205086/healthcare-ecommerce",
    demo: "https://healthcare-demo.vercel.app",
    image: "/projects/healthcare.png",
    category: "Backend"
  },
  {
    id: 3,
    title: "PTPI – Tutor Recruitment Platform",
    description: "A platform connecting qualified tutors with students, featuring advanced matching algorithms and comprehensive management tools.",
    technologies: ["Django", "React.js", "DigitalOcean", "PostgreSQL", "Redis"],
    features: [
      "Managed end-to-end deployment and security configurations on cloud",
      "Automated database backups and optimized DB performance",
      "Implemented tutor-student matching algorithm",
      "Real-time chat and video calling integration"
    ],
    github: "https://github.com/princekumar205086/ptpi",
    demo: "https://ptpi-demo.vercel.app",
    image: "/projects/ptpi.png",
    category: "Full Stack"
  }
]

export const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "JIMS, GGSIPU",
    period: "2021–2023",
    grade: "86.4%"
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Purnia College, BNMU",
    period: "2017–2020",
    grade: "70.1%"
  }
]

export const certifications = [
  {
    name: "AWS Fundamentals",
    issuer: "Coursera / Udemy",
    year: "2023",
    icon: "aws"
  },
  {
    name: "Cisco CyberOps Associate",
    issuer: "Cisco",
    year: "2022",
    icon: "shield"
  },
  {
    name: "Docker & Kubernetes Essentials",
    issuer: "In Progress",
    year: "2024",
    icon: "container"
  }
]

export const softSkills = [
  "Problem Solving",
  "Automation Mindset",
  "Collaboration",
  "Cloud Cost Optimization",
  "Agile Methodologies"
]