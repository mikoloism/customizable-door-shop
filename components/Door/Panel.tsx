import classnames from 'classnames';
import { RefObject } from 'react';
import style from 'styles/panel.module.scss';
import { withPositionStyle } from './hooks';
import { PropsWithPosition } from './types';

export function Panel(props: Props) {
    const className = classnames({ [style[`panel`]]: true });

    return (
        <div
            ref={props.currentRef}
            className={className}
            style={withPositionStyle(props)}></div>
    );
}

type Props = PropsWithPosition<{ currentRef: RefObject<HTMLDivElement> }>;
