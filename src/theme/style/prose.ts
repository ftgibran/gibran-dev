import type { GlobalStyleObject } from '@chakra-ui/react'

const TRAILING_PSEUDO_REGEX = /(::?[\w-]+(?:\([^)]*\))?)+$/
const EXCLUDE_CLASSNAME = '.not-prose'

export function inWhere<T extends string>(selector: T): T {
  const rebuiltSelector = selector.startsWith('& ')
    ? selector.slice(2)
    : selector
  const match = selector.match(TRAILING_PSEUDO_REGEX)
  const pseudo = match ? match[0] : ''
  const base = match ? selector.slice(0, -match[0].length) : rebuiltSelector

  return `& :where(${base}):not(${EXCLUDE_CLASSNAME}, ${EXCLUDE_CLASSNAME} *)${pseudo}` as T
}

export const prose: GlobalStyleObject = {
  ['.prose']: {
    display: 'flex',
    flexFlow: 'column',
    gap: 4,
    fontFamily: 'body',
    fontSize: 'md',
    [inWhere('& p')]: {
      color: 'fg',
      textStyle: 'md',
    },
    [inWhere('& blockquote')]: {
      paddingInline: '1.285em',
      borderInlineStartWidth: '0.25em',
      color: 'fg',
    },
    [inWhere('& a')]: {
      fontFamily: 'heading',
      fontWeight: 'medium',
      fontStyle: 'italic',
      color: 'fg.primary',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      textDecorationColor: 'fg.tertiary',
      _hover: {
        textDecorationColor: 'fg.secondary',
      },
      cursor: 'pointer',
      borderRadius: 'l1',
      focusRing: 'outside',
      outline: '0px solid',
      outlineOffset: '0',
      outlineColor: 'transparent',
      transitionProperty: 'all',
      transitionDuration: 'slow',
    },
    [inWhere('& strong')]: {
      fontFamily: 'heading',
      fontWeight: 'bold',
      letterSpacing: 'wider',
    },
    [inWhere('& a strong')]: {
      color: 'inherit',
    },
    [inWhere('& h1 strong')]: { fontWeight: 'extrabold' },
    [inWhere('& h1')]: {
      marginTop: 0,
      marginBottom: 0,
      textStyle: 'h1',
    },
    [inWhere('& h2 strong')]: { fontWeight: 'extrabold' },
    [inWhere('& h2')]: {
      marginTop: '1em !important',
      marginBottom: 0,
      textStyle: 'h2',
    },
    [inWhere('&> h2')]: {
      marginBottom: '2 !important',
      pos: 'relative',
      display: 'inline-block',
      alignSelf: 'start',
      _after: {
        content: '""',
        position: 'absolute',
        bottom: -1.5,
        left: 0,
        width: 'full',
        height: '2px',
        bgImage:
          'linear-gradient(to right, {colors.border}, {colors.fg.muted})',
      },
    },
    [inWhere('& h3 strong')]: { fontWeight: 'bold' },
    [inWhere('& h3')]: {
      marginTop: '0.75em !important',
      marginBottom: 0,
      textStyle: 'h3',
    },
    [inWhere('& h4 strong')]: { fontWeight: 'semibold' },
    [inWhere('& h4')]: {
      marginBottom: 0,
      textStyle: 'h4',
    },
    [inWhere('& h5 strong')]: { fontWeight: 'semibold' },
    [inWhere('& h5')]: {
      marginBottom: 0,
      textStyle: 'h5',
    },
    [inWhere('& h6 strong')]: { fontWeight: 'medium' },
    [inWhere('& h6')]: {
      marginBottom: 0,
      textStyle: 'h6',
    },
    [inWhere('& img')]: {
      borderRadius: 'lg',
      boxShadow: 'inset',
    },
    [inWhere('& picture')]: {
      //
    },
    [inWhere('& picture > img')]: {
      //
    },
    [inWhere('& video')]: {
      //
    },
    [inWhere('& kbd')]: {
      fontSize: '0.85em',
      borderRadius: 'xs',
      paddingTop: '0.15em',
      paddingBottom: '0.15em',
      paddingInlineEnd: '0.35em',
      paddingInlineStart: '0.35em',
      fontFamily: 'inherit',
      color: 'fg.muted',
      '--shadow': 'colors.border',
      boxShadow: '0 0 0 1px var(--shadow),0 1px 0 1px var(--shadow)',
    },
    [inWhere('& code')]: {
      fontSize: 'sm',
      letterSpacing: '-0.01em',
      borderRadius: 'md',
      borderWidth: '1px',
      padding: '0.25em',
    },
    [inWhere('& pre code')]: {
      fontSize: 'inherit',
      letterSpacing: 'inherit',
      borderWidth: 'inherit',
      padding: '0',
    },
    [inWhere('& h2 code')]: {
      fontSize: '0.9em',
    },
    [inWhere('& h3 code')]: {
      fontSize: '0.8em',
    },
    [inWhere('& pre')]: {
      my: 0,
      layerStyle: 'muted',
      borderRadius: 'md',
      fontSize: '0.9em',
      paddingTop: '0.65em',
      paddingBottom: '0.65em',
      paddingInlineEnd: '1em',
      paddingInlineStart: '1em',
      overflowX: 'auto',
      fontWeight: '400',
    },
    [inWhere('& ol')]: {
      paddingInlineStart: '1.5em',
    },
    [inWhere('& ul')]: {
      paddingInlineStart: '1.5em',
    },
    [inWhere('& li')]: {
      fontSize: 'md',
      marginTop: '0.5em',
      marginBottom: '0.5em',
    },
    [inWhere('& ol > li')]: {
      paddingInlineStart: '0.4em',
      listStyleType: 'decimal',
      '&::marker': {
        color: 'fg.muted',
      },
    },
    [inWhere('& ul > li')]: {
      paddingInlineStart: '0.4em',
      listStyleType: 'disc',
      '&::marker': {
        color: 'fg.muted',
      },
    },
    [inWhere('& dl')]: {
      //
    },
    [inWhere('& dt')]: {
      fontWeight: '600',
      //
    },
    [inWhere('& dd')]: {
      //
      paddingInlineStart: '1.5em',
    },
    [inWhere('& hr')]: {
      my: '3em',
    },
    [inWhere('& :is(h1,h2,h3,h4,h5,h6,hr) + *')]: {
      marginTop: '0 !important',
    },
    [inWhere('& table')]: {
      width: '100%',
      tableLayout: 'auto',
      textAlign: 'start',
      lineHeight: '1.5em',
    },
    [inWhere('& thead')]: {
      borderBottomWidth: '1px',
      color: 'fg',
    },
    [inWhere('& tbody tr')]: {
      borderBottomWidth: '1px',
      borderBottomColor: 'border.muted',
    },
    [inWhere('& thead th')]: {
      fontWeight: 'bold',
      textAlign: 'start',
      color: 'fg.primary',
      fontSize: 'sm',
      textTransform: 'uppercase',
      bg: 'whiteAlpha.50',
      py: 4,
      px: 6,
    },
    [inWhere('& tbody td, tfoot td')]: {
      fontWeight: 'semibold',
      py: 4,
      px: 6,
    },
    [inWhere('& tbody tr:nth-of-type(even)')]: {
      bg: 'whiteAlpha.50',
    },
    [inWhere('& :is(td,th) h1,h2,h3,h4,h5,h6,p')]: {
      my: 0,
    },
    [inWhere('& figure')]: {
      //
    },
    [inWhere('& figure > *')]: {
      //
    },
    [inWhere('& figcaption')]: {
      fontSize: 'md',
      fontFamily: 'heading',
      fontWeight: 'semibold',
      lineHeight: 'moderate',
      color: 'fg.muted',
      marginTop: '0.5em',
      textAlign: 'center',
    },
  },
} as const
