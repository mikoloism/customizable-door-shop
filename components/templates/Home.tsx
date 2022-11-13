import classNames from 'classnames';
import style from 'styles/home.module.scss';

export function HomeTemplate(props: Props) {
    return (
        <div className="w-screen h-screen flex flex-wrap flex-col">
            <div className="flex flex-wrap flex-row w-1/4 h-full border-r-4 border-black"></div>
            <div className="flex flex-wrap flex-row w-3/4 h-full place-content-center place-items-center overflow-hidden">
                <div className={style.door}>
                    <span
                        className={classNames(
                            style.door__top,
                            'flex flex-wrap flex-row'
                        )}
                        id="top"></span>
                    <span
                        className={classNames(
                            style.door__left,
                            'flex flex-wrap flex-row'
                        )}
                        id="left"></span>
                    <span
                        className={classNames(
                            style.door__middle,
                            'flex flex-wrap flex-row'
                        )}
                        id="middle"></span>
                    <span
                        className={classNames(
                            style.door__bottom,
                            'flex flex-wrap flex-row'
                        )}
                        id="bottom"></span>
                    <span
                        className={classNames(
                            style.door__right,
                            'flex flex-wrap flex-row'
                        )}
                        id="right"></span>
                </div>
            </div>
        </div>
    );
}

type Props = {};
