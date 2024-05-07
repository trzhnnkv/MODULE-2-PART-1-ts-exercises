declare module 'str-utils' {
    type stringType = (str: string) => string;
    export const strReverse: stringType;
    export const strToLower: stringType;
    export const strToUpper: stringType;
    export const strRandomize: stringType;
    export const strInvertCase: stringType;
}
