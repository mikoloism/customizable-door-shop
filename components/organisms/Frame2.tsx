import classNames from 'classnames';
import style from 'styles/frame-2.module.scss';

export function Frame2() {
    return (
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
    );
}
