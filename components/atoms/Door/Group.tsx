import classnames from 'classnames';
import { PropsWithChildren } from 'react';
import style from 'styles/group.module.scss';
import { withComputedPosition, withComputedSize } from './hooks';
import { PropsWithPosition, PropsWithRef, PropsWithStyle } from './types';

export function Group(props: Props) {
    const className = classnames({ [style[`group`]]: true });
    const inlineStyle = {
        ...withComputedPosition(props),
        ...withComputedSize(props),
    };

    if (props?.reference) {
        return (
            <div
                ref={props.reference}
                className={className}
                style={inlineStyle}>
                {props.children}
            </div>
        );
    }

    return (
        <div
            className={className}
            style={inlineStyle}>
            {props.children}
        </div>
    );
}

type Props = PropsWithChildren<
    PropsWithPosition & PropsWithStyle & PropsWithRef
>;
