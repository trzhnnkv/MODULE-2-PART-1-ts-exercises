declare module 'exercise_12/stats/index' {
    export function getMaxIndex<T>(input: T[], comparator: (a: T, b: T) => number): number;
    export function getMinIndex<T>(input: T[], comparator: (a: T, b: T) => number): number;
    export function getMaxElement<T>(input: T[], comparator: (a: T, b: T) => number): T | null;
    export function getMinElement<T>(input: T[], comparator: (a: T, b: T) => number): T | null;
    export function getMedianIndex<T>(input: T[], comparator: (a: T, b: T) => number): number;
    export function getMedianElement<T>(input: T[], comparator: (a: T, b: T) => number): T | null;
    export function getAverageValue<T>(input: T[], getValue: (item: T) => number): number | null;
}
