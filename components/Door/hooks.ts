import { PropsWithPosition } from './types';

export function withPositionStyle(props: PropsWithPosition<{}>) {
    const styleWithPosition = {};

    if (props?.position?.top !== undefined) {
        Object.assign(styleWithPosition, { top: `${props.position.top}px` });
    }

    if (props?.position?.left !== undefined) {
        Object.assign(styleWithPosition, { left: `${props.position.left}px` });
    }

    if (props?.position?.right !== undefined) {
        Object.assign(styleWithPosition, {
            right: `${props.position.right}px`,
        });
    }

    if (props?.position?.bottom !== undefined) {
        Object.assign(styleWithPosition, {
            bottom: `${props.position.bottom}px`,
        });
    }

    return styleWithPosition;
}
