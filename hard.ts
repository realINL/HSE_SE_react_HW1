export type Camelize<ObjectType> = unknown;

type DeepPick<T, Paths extends string> = Paths extends `${infer Start}.${infer RemainingPath}`
    ? Start extends keyof T
        ? { [K in Start]: DeepPick<T[Start], RemainingPath> }
        : never
    : Paths extends keyof T
        ? { [K in Paths]: T[K] }
        : never;