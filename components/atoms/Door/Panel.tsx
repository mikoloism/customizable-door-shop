import classnames from 'classnames';
import style from 'styles/panel.module.scss';
import { withComputedPosition, withComputedSize } from './hooks';
import { PropsWithPosition, PropsWithRef, PropsWithStyle } from './types';

export function Panel(props: Props) {
    const className = classnames({ [style[`panel`]]: true });
    const inlineStyle = {
        ...withComputedPosition(props),
        ...withComputedSize(props),
    };

    return (
        <div
            ref={props.reference}
            className={className}
            style={inlineStyle}></div>
    );
}

type Props = PropsWithRef<PropsWithPosition & PropsWithStyle>;
