import { PropsWithChildren } from 'react';
import classnames from 'classnames';
import style from 'styles/group.module.scss';

export function Group(props: Props) {
    const className = classnames({
        [style[`group`]]: true,
        [style[`group--${props.axis}`]]: true,
    });

    return <div className={className}>{props.children}</div>;
}

type Props = PropsWithChildren<{ axis: 'vertical' | 'horizontal' }>;
