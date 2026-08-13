import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SITE_URL,
} from '@config/constants'
import { FC } from 'react'

/**
 * Structured data so search engines and sourcing tools read the profile as a
 * person with a job title, not as an untyped page of text.
 */
export const PersonJsonLd: FC = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Felipe Gibran',
    jobTitle: 'Fullstack Software Engineer',
    email: `mailto:${CONTACT_EMAIL}`,
    url: SITE_URL,
    sameAs: [GITHUB_URL, LINKEDIN_URL],
    knowsLanguage: ['pt-BR', 'en-US'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressCountry: 'BR',
    },
    knowsAbout: [
      'Frontend architecture',
      'Design systems',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Java',
      'Spring Boot',
      'API design',
      'PostgreSQL',
      'Web performance',
      'Real-time web applications',
      'AI-assisted development',
      'Agentic coding workflows',
    ],
  }

  return (
    <script
      type={'application/ld+json'}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

PersonJsonLd.displayName = 'PersonJsonLd'
