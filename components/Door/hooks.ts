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
        return { [propertyName]: `${position[propertyName]}px` };
    }

    return {};
}

type Properties = 'top' | 'bottom' | 'left' | 'right';
