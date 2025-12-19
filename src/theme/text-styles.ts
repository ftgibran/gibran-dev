import { defineTextStyles } from '@chakra-ui/react'

export const textStyles = defineTextStyles({
  none: { value: {} },
  '2xs': {
    value: { fontSize: '2xs', lineHeight: '3', letterSpacing: 'moderate' },
  },
  xs: {
    value: { fontSize: 'xs', lineHeight: '4', letterSpacing: 'moderate' },
  },
  sm: {
    value: { fontSize: 'sm', lineHeight: '5', letterSpacing: 'wide' },
  },
  md: {
    value: { fontSize: 'md', lineHeight: '6', letterSpacing: 'wide' },
  },
  lg: {
    value: { fontSize: 'lg', lineHeight: '7', letterSpacing: 'wider' },
  },
  xl: {
    value: { fontSize: 'xl', lineHeight: '1.875rem', letterSpacing: 'wider' },
  },
  '2xl': {
    value: {
      fontSize: '2xl',
      lineHeight: '2rem',
      letterSpacing: 'widest',
    },
  },
  '3xl': {
    value: {
      fontSize: '3xl',
      lineHeight: '2.375rem',
      letterSpacing: 'widest',
    },
  },
  '4xl': {
    value: {
      fontSize: '4xl',
      lineHeight: '2.75rem',
      letterSpacing: 'widest',
    },
  },
  '5xl': {
    value: {
      fontSize: '5xl',
      lineHeight: '3.75rem',
      letterSpacing: 'widest',
    },
  },
  '6xl': {
    value: { fontSize: '6xl', lineHeight: '4.5rem', letterSpacing: 'widest' },
  },
  '7xl': {
    value: {
      fontSize: '7xl',
      lineHeight: '5.75rem',
      letterSpacing: 'widest',
    },
  },
  logo: {
    value: {
      textTransform: 'capitalize',
      fontFamily: 'logo',
      fontSize: 'xl',
      fontWeight: 'bold',
      fontStyle: 'normal',
      letterSpacing: 'wider',
      lineHeight: 'taller',
      whiteSpace: 'nowrap',
      color: 'white',
    },
  },
  title: {
    value: {
      textTransform: 'capitalize',
      fontFamily: 'heading',
      fontSize: 'lg',
      fontWeight: 'bold',
      fontStyle: 'italic',
      letterSpacing: 'widest',
      lineHeight: 'tall',
    },
  },
  subtitle: {
    value: {
      textTransform: 'capitalize',
      fontFamily: 'heading',
      fontSize: 'sm',
      fontWeight: 'semiBold',
      fontStyle: 'italic',
      letterSpacing: 'moderate',
      lineHeight: 'shorter',
    },
  },
  label: {
    value: {
      fontFamily: 'heading',
      fontSize: 'sm',
      fontWeight: 'medium',
      letterSpacing: 'wider',
      lineHeight: 'shorter',
    },
  },
  h1: {
    value: {
      color: 'fg',
      fontFamily: 'heading',
      fontSize: { base: '3xl', md: '4xl' },
      fontWeight: 'extrabold',
      fontStyle: 'italic',
      letterSpacing: 'widest',
      lineHeight: '10',
    },
  },
  h2: {
    value: {
      color: 'fg',
      fontFamily: 'heading',
      fontSize: { base: '3xl', md: '4xl' },
      fontWeight: 'extrabold',
      fontStyle: 'italic',
      letterSpacing: 'widest',
      lineHeight: '10',
    },
  },
  h3: {
    value: {
      color: 'fg',
      fontFamily: 'heading',
      fontSize: 'xl',
      fontWeight: 'bold !important',
      fontStyle: 'italic',
      letterSpacing: 'wider',
      lineHeight: '7',
    },
  },
  h4: {
    value: {
      color: 'fg.primary',
      fontFamily: 'heading',
      fontSize: 'lg',
      fontWeight: 'semibold',
      fontStyle: 'italic',
      letterSpacing: 'wide',
      lineHeight: '7',
    },
  },
  h5: {
    value: {
      color: 'fg.secondary',
      fontFamily: 'heading',
      fontSize: 'md',
      fontWeight: 'semibold',
      fontStyle: 'italic',
      letterSpacing: 'moderate',
      lineHeight: '6',
    },
  },
  h6: {
    value: {
      color: 'fg.tertiary',
      fontFamily: 'heading',
      fontSize: 'sm',
      fontWeight: 'medium',
      fontStyle: 'italic',
      letterSpacing: 'moderate',
      lineHeight: '5',
    },
  },
})
