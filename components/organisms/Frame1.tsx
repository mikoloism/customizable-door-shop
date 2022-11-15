import classNames from 'classnames';
import style from 'styles/frame-1.module.scss';
import container from 'styles/home.module.scss';

export function FrameTemplate1() {
    return (
        <div
            className={classNames(
                style.door_wrapper,
                container.template__door
            )}>
            <div className={style.door}>
                <div className={style.door__top}></div>
                <div className={style.door__left}></div>
                <div className={style.door__right}></div>
                <div className={style.door__bottom}></div>
                <div className={style.door__middle}></div>
            </div>
        </div>
    );
}
