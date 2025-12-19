import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
  type SystemConfig,
} from '@chakra-ui/react'

import { animationStyles } from './animation-styles'
import { breakpoints } from './breakpoints'
import { globalCss } from './global-css'
import { keyframes } from './keyframes'
import { layerStyles } from './layer-styles'
import { recipes } from './recipes'
import { semanticTokens } from './semantic-tokens'
import { slotRecipes } from './slot-recipes'
import { textStyles } from './text-styles'
import { tokens } from './tokens'

export const themeConfig = defineConfig({
  preflight: true,
  strictTokens: false,
  cssVarsPrefix: 'ilv',
  cssVarsRoot: ':where(:root, :host)',
  globalCss,
  theme: {
    breakpoints,
    keyframes,
    tokens,
    semanticTokens,
    recipes,
    slotRecipes,
    textStyles,
    layerStyles,
    animationStyles,
  },
})

export const createDesignSystem = (...customConfig: SystemConfig[]) => {
  return createSystem(defaultBaseConfig, themeConfig, ...customConfig)
}

export const system = createDesignSystem()

export { prose } from './style/prose'
