import classNames from 'classnames';
import Image from 'next/image';
import style from 'styles/frame-2.module.scss';

export function Frame2(props: { frameImage: string; middleImage: string }) {
    return (
        // <div
        //     className={classNames(
        //         style.frame__wrapper,
        //         container.board__frame_wrapper
        //     )}>
        <div
            className={classNames(
                style.frame,
                style['frame-inside'],
                style.frame__inside
            )}>
            <div className={style[`frame-inside__left`]}></div>
            <div className={style[`frame-inside__right`]}></div>
            <div className={style[`frame-inside__top`]}></div>
            <div className={style[`frame-inside__bottom`]}></div>
            <div className={style[`frame-inside__middle`]}></div>
        </div>
        // </div>
    );
}
