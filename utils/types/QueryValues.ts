export type TypeOrArray<T> = T | T[]

export type QueryValue =
  | TypeOrArray<string>
  | TypeOrArray<number>
  | TypeOrArray<boolean>
  | null

export type QueryValues<K extends string = string> = Record<K, QueryValue>
