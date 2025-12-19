export type Translator = (
  id: string,
  variables?: Record<
    string,
    string | number | ((chunks: Array<string>) => string)
  >,
) => string

export interface Translation {
  t: Translator
  withChunks: (...tags: string[]) => {
    [p: string]: (chunks: string[]) => string
  }
  labelExists: (labelKey: string) => boolean
  handleErrorMessage: (
    error: any,
    prefix?: string | undefined,
    fallbackMsg?: string,
  ) => string
}
