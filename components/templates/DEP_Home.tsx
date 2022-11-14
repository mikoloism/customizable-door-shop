import style from 'styles/home.module.scss';

export function HomeTemplate() {
    return (
        <div className="w-screen h-screen flex flex-wrap flex-col">
            <div className="flex flex-wrap flex-row w-1/4 h-full border-r-4 border-black"></div>
            <div className="flex flex-wrap flex-row w-3/4 h-full place-content-center place-items-center overflow-hidden">
                <div className={style.door}>
                    <span className={style.door__top}></span>
                    <span className={style.door__left}></span>
                    <span className={style.door__middle}></span>
                    <span className={style.door__bottom}></span>
                    <span className={style.door__right}></span>
                </div>
            </div>
        </div>
    );
}
