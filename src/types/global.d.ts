import React from 'react'

export declare global {
  type Language = 'en-US' | 'pt-BR'

  type HTMLProps = React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
}
