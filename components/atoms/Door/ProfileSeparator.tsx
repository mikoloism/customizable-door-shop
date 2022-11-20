import classnames from 'classnames';
import style from 'styles/profile-separator.module.scss';
import { withComputedPosition, withComputedSize } from './hooks';
import { PropsWithPosition, PropsWithRef, PropsWithStyle } from './types';

export function ProfileSeparator(props: Props) {
    const className = classnames({
        [style[`profile-separator`]]: true,
        [style[`profile-separator--${props.axis}`]]: true,
    });
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

export type Props = PropsWithRef<PropsWithPosition & PropsWithStyle> & {
    axis: 'vertical' | 'horizontal';
};
