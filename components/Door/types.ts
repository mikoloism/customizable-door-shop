export type PropsWithPosition<T> = T & {
    position?: {
        top?: number | string;
        left?: number | string;
        right?: number | string;
        bottom?: number | string;
    };
};
