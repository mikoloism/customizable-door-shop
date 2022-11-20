import classnames from 'classnames';
import { RefObject } from 'react';
import style from 'styles/profile-separator.module.scss';
import { withPositionVariables } from './hooks';
import { PropsWithPosition } from './types';

export function ProfileSeparator(props: Props) {
    const className = classnames({
        [style[`profile-separator`]]: true,
        [style[`profile-separator--${props.axis}`]]: true,
    });

    return (
        <div
            ref={props.currentRef}
            className={className}
            style={withPositionVariables(
                props,
                'profile-separator-position'
            )}></div>
    );
}

export type Props = PropsWithPosition<{
    axis: 'vertical' | 'horizontal';
    currentRef: RefObject<HTMLDivElement>;
}>;
