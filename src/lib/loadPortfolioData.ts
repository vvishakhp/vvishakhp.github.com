import rawData from '../data/data.json'
import type { PortfolioData } from '../types/portfolio'

const hasArray = (value: unknown): value is unknown[] => Array.isArray(value)

export function loadPortfolioData(): PortfolioData {
  const candidate = rawData as Partial<PortfolioData>

  if (!candidate.basics || !candidate.about || !hasArray(candidate.experience)) {
    throw new Error('Portfolio data is missing required top-level sections.')
  }

  return {
    ...candidate,
    projects: hasArray(candidate.projects) ? candidate.projects : [],
    certifications: hasArray(candidate.certifications) ? candidate.certifications : [],
    socialLinks: hasArray(candidate.socialLinks) ? candidate.socialLinks : [],
  } as PortfolioData
}
