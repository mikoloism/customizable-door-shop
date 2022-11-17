export type PropsWithPosition<T> = T & {
    position?: { top?: number; left?: number; right?: number; bottom?: number };
};
