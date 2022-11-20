import { useEffect, useRef, useState } from 'react';
import {
    PositionProperties,
    PositionType,
    PropsWithPosition,
    PropsWithStyle,
    SizeProperties,
    SizeType,
} from './types';

//@ boundingClientRect

export function useBoundingClientRect() {
    const ref = useRef<HTMLDivElement>(null);
    const [boundingClientRect, setBoundingClientRect] = useState<DOMRect>();

    useEffect(() => {
        setBoundingClientRect(ref.current!.getBoundingClientRect());

        return () => {};
    }, []);

    return {
        ref,
        current: ref.current,
        boundingClientRect,
        setBoundingClientRect,
    };
}

//@ end boundingClientRect

//@ position

const POSITION_PROPERTIES: PositionProperties[] = [
    'top',
    'right',
    'bottom',
    'left',
];

export function withComputedPosition(props: PropsWithPosition): object {
    const inlineStyle = {};

    POSITION_PROPERTIES.map(mapPositionProperties);

    function mapPositionProperties(property: PositionProperties) {
        Object.assign(
            inlineStyle,
            computePositionStyle(props?.position, property)
        );
    }

    return inlineStyle;
}

function computePositionStyle(
    position: PositionType | undefined,
    property: PositionProperties
) {
    if (position?.[property] !== undefined) {
        if (typeof position?.[property] === 'number')
            return {
                [`--position-${property}`]: `${position[property]}px`,
            };

        return { [`--position-${property}`]: position[property] };
    }

    return {};
}
//@ end position

//@ size

const SIZE_PROPERTIES: SizeProperties[] = ['width', 'height'];

export function withComputedSize(props: PropsWithStyle): object {
    const inlineStyle = {};

    SIZE_PROPERTIES.map(mapSizeProperties);

    function mapSizeProperties(property: SizeProperties) {
        Object.assign(inlineStyle, computeSizeStyle(props?.style, property));
    }

    return inlineStyle;
}

function computeSizeStyle(
    position: SizeType | undefined,
    property: SizeProperties
) {
    if (position?.[property] !== undefined) {
        if (typeof position?.[property] === 'number')
            return {
                [property]: `${position[property]}px`,
            };

        return { [property]: position[property] };
    }

    return {};
}

//@ end size
