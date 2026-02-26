export type SocialLink = {
  platform: string
  url: string
  label: string
  icon: string
}

export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  title: string
  summary: string
  stack: string[]
  links: ProjectLink[]
}

export type ExperienceItem = {
  company: string
  title: string
  duration: string
  bullets: string[]
}

export type EducationItem = {
  degree: string
  institution: string
  yearRange: string
  notes?: string
}

export type TechnicalSkills = {
  backend: string[]
  frontend: string[]
  databases: string[]
  devops: string[]
}

export type SkillItem = {
  name: string
  icon: string
}

export type PersonalInfo = {
  dob: string
  languages: string[]
}

export type PortfolioData = {
  basics: {
    name: string
    role: string
    tagline: string
    location: string
    email: string
    phone: string
    yearsOfExperience: string
    profileImage: string
    fullSizeImage: string
  }
  about: {
    paragraphs: string[]
  }
  experience: ExperienceItem[]
  technicalSkills: TechnicalSkills
  skills: SkillItem[]
  coreSkills: string[]
  education: EducationItem[]
  personalInfo: PersonalInfo
  projects: Project[]
  certifications: string[]
  socialLinks: SocialLink[]
}
