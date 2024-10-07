export type DeepPartial<T> = {
    [P in keyof T] ?: T[P] extends object ? 
    DeepPartial<T[P]>  
    : T[P] | undefined  
};

export type MyCapitalize<T extends string> = T extends `${infer First}${infer Rest}` ? `${Uppercase<First>}${Rest}` : T;

export type DeepMutable<T> = T extends object ? {
    -readonly [P in keyof (T)]: DeepMutable<T[P]>;
} : T;

export type ParseURLParams<StringElem extends string> =  StringElem extends `${infer Head}/:${infer Param}/:${infer Tail}` ? Param | ParseURLParams<`${Param}/:${Tail}`> : StringElem extends `${infer Head}/:${infer Param}`? Param: null;