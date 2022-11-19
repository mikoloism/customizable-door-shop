import { PropsWithPosition } from './types';

const PROPERTIES: Properties[] = ['top', 'bottom', 'left', 'right'];

export function withPositionStyle(props: PropsWithPosition<{}>) {
    const styleWithPosition = {};

    PROPERTIES.map((property: Properties) => {
        Object.assign(
            styleWithPosition,
            computePositionProperty(props?.position, property)
        );
    });

    return styleWithPosition;
}

function computePositionProperty(
    position: PropsWithPosition<{}>['position'],
    propertyName: Properties
) {
    if (position?.[propertyName] !== undefined) {
        if (typeof position?.[propertyName] === 'number')
            return { [propertyName]: `${position[propertyName]}px` };

        return { [propertyName]: position[propertyName] };
    }

    return {};
}

const TWO_COORDINATION_PROPERTIES: TopAndLeft[] = ['top', 'left'];
export function withPositionVariables(
    props: PropsWithPosition<{}>,
    variableName: string
) {
    const styleWithPosition = {};

    TWO_COORDINATION_PROPERTIES.map((property: TopAndLeft) => {
        Object.assign(
            styleWithPosition,
            computePositionWithVariable(props?.position, variableName, property)
        );
    });

    return styleWithPosition;
}

function computePositionWithVariable(
    position: PropsWithPosition<{}>['position'],
    variableName: string,
    propertyName: Properties
) {
    if (position?.[propertyName] !== undefined) {
        if (typeof position?.[propertyName] === 'number')
            return { [`--${variableName}`]: `${position[propertyName]}px` };

        return { [`--${variableName}`]: position[propertyName] };
    }

    return {};
}

type Properties = 'top' | 'bottom' | 'left' | 'right';
type TopAndLeft = 'top' | 'left';
type PositionTopAndLeft = Omit<Properties, 'right' | 'bottom'>;
