import { CSSProperties, RefObject } from 'react';

export type PositionProperties = 'top' | 'right' | 'bottom' | 'left';

export type PropsWithPosition<T = {}> = T & { position?: PositionType };

export type PositionType = {
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
};

export type PropsWithStyle<T = {}> = T & { style?: CSSProperties };

export type PropsWithRef<T = {}> = T & { reference: RefObject<HTMLDivElement> };
