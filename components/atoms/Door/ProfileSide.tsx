import classnames from 'classnames';
import { useEffect, useState } from 'react';
import style from 'styles/profile-side.module.scss';
import { withComputedPosition, withComputedSize } from './hooks';
import { PropsWithPosition, PropsWithRef, PropsWithStyle } from './types';

export function ProfileSide(props: Props) {
    const [width, setWidth] = useState<number>(0);
    const className = classnames({
        [style[`profile-side`]]: true,
        [style[`profile-side--rotate-${props.rotate}`]]: true,
    });
    const inlineStyle = {
        ...withComputedPosition(props),
        ...withComputedSize(props),
    };

    useEffect(() => {
        setWidth(props.reference.current!.getBoundingClientRect().height);
    }, [props.reference]);

    return (
        <div
            ref={props.reference}
            className={className}
            style={inlineStyle}>
            {['90', '270'].includes(props.rotate) ? (
                <div
                    className={style[`profile-side__image`]}
                    style={{
                        width,
                        height: 'calc(var(--profile-side-size) + var(--profile-side-tool-width))',
                    }}></div>
            ) : (
                <div
                    className={style[`profile-side__image`]}
                    style={{ width: '100%', height: '100%' }}></div>
            )}
        </div>
    );
}

export type Props = PropsWithRef<
    PropsWithPosition<
        PropsWithStyle<{
            rotate: '90' | '270' | '0' | '180';
        }>
    >
>;
