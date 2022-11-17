import classnames from 'classnames';
import { forwardRef, PropsWithChildren, RefObject } from 'react';
import style from 'styles/group.module.scss';
import { withPositionStyle } from './hooks';
import { PropsWithPosition } from './types';

export function Group(props: Props) {
    const className = classnames({ [style[`group`]]: true });

    return (
        <div
            ref={props.currentRef}
            className={className}
            style={withPositionStyle(props)}>
            {props.children}
        </div>
    );
}

type Props = PropsWithPosition<
    PropsWithChildren & { currentRef: RefObject<HTMLDivElement> }
>;
