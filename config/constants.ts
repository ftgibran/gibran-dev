import { getEnvString } from '@utils/common/getEnvs'

export const SUPPORTED_LOCALES = ['en-US', 'pt-BR'] as const
export const DEFAULT_LOCALE = SUPPORTED_LOCALES[0]

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

export const GA_ID = getEnvString(process.env.NEXT_PUBLIC_GA_ID)

/**
 * The contact form posts here instead of calling Discord directly. The webhook
 * token stays server-side, in `DISCORD_HOOK_URL`, read by the route handler.
 */
export const CONTACT_ENDPOINT = '/api/contact'

export const SITE_URL = 'https://gibran.dev'
export const CONTACT_EMAIL = 'ft.gibran@gmail.com'
export const GITHUB_URL = 'https://github.com/ftgibran'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/ftgibran'

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_TEST = process.env.NODE_ENV === 'test'

export const NAVBAR_HEIGHT = 72
