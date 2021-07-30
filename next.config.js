const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  i18n: {
    localeDetection: false,
    locales:
      process.env.NEXT_PUBLIC_LOCALES &&
      process.env.NEXT_PUBLIC_LOCALES.split(','),
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
    domains: process.env.NEXT_PUBLIC_LOCALE_DOMAINS
      ? process.env.NEXT_PUBLIC_LOCALE_DOMAINS.split(',').map((it) => ({
          domain: it.split('|')[0],
          defaultLocale: it.split('|')[1],
          http: process.env.NODE_ENV === 'development',
        }))
      : null,
  },
}
