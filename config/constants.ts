import { getEnvString } from '@utils/common/getEnvs'

export const SUPPORTED_LOCALES = ['en-US', 'pt-BR'] as const
export const DEFAULT_LOCALE = SUPPORTED_LOCALES[0]

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

export const GA_ID = getEnvString(process.env.NEXT_PUBLIC_GA_ID)
export const DISCORD_HOOK_URL = getEnvString(
  process.env.NEXT_PUBLIC_DISCORD_HOOK_URL,
)

export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development'
export const IS_PRODUCTION = process.env.NODE_ENV === 'production'
export const IS_TEST = process.env.NODE_ENV === 'test'

export const NAVBAR_HEIGHT = 72
