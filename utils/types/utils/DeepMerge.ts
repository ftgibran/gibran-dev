export type DeepMerge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof T & keyof U
    ? T[K] | U[K] extends object
      ? DeepMerge<T[K], U[K]>
      : T[K] | U[K]
    : K extends keyof T
      ? T[K]
      : K extends keyof U
        ? U[K]
        : never
}

export type RecursiveDeepMerge<T> = T extends [infer F, ...infer R]
  ? F extends unknown
    ? DeepMerge<F, RecursiveDeepMerge<R>>
    : never
  : unknown
