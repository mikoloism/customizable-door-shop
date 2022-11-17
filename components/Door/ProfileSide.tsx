import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import style from 'styles/profile-side.module.scss';
import { withPositionStyle } from './hooks';
import { PropsWithPosition } from './types';

export function ProfileSide(props: Props) {
    const [width, setWidth] = useState<number>(0);
    const className = classnames({
        [style[`profile-side`]]: true,
        [style[`profile-side--rotate-${props.rotate}`]]: true,
    });
    const sideRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setWidth(sideRef.current!.getBoundingClientRect().height);
    }, []);

    return (
        <div
            ref={sideRef}
            className={className}
            style={withPositionStyle(props)}>
            {['90', '270'].includes(props.rotate) ? (
                <div
                    className={style[`profile-side__image`]}
                    style={{ width, height: 'var(--profile-side-size)' }}></div>
            ) : (
                <div
                    className={style[`profile-side__image`]}
                    style={{ width: '100%', height: '100%' }}></div>
            )}
        </div>
    );
}

type Props = PropsWithPosition<{
    rotate: '90' | '270' | '0' | '180';
}>;
