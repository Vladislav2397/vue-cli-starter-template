declare namespace global {
    type Maybe<T> = T | null
    type Optional<T> = T | undefined
}

export * from './app/providers/device'

export type Maybe<T> = T | null
export type Optional<T> = T | undefined
