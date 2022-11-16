import classNames from 'classnames';
import { Frame2 as FrameInside } from 'components/organisms/Frame2';
import {
    createContext,
    KeyboardEvent,
    PropsWithChildren,
    RefObject,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import frameStyle from 'styles/frame-2.module.scss';
import style from 'styles/home.module.scss';

const KEYBOARD_ENTER = 'enter';
const DEFAULT_FRAME_WIDTH_SIZE = 500;
const DEFAULT_FRAME_HEIGHT_SIZE = 800;
const PADDING_SIZE = 16 * 2;
const DIMENSION_SIZE = 48 * 2;
const OUTSIDE_FRAME_SIZE = 48;

const DimensionContext = createContext<[ContextState, any] | null>(null);

export function HomeTemplate() {
    const boardRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <DimensionContextProvider
            boardRef={boardRef}
            containerRef={containerRef}>
            <div className="w-screen h-screen flex flex-wrap flex-col">
                <div className="flex flex-wrap flex-row w-1/4 h-full border-r-4 border-black"></div>
                <div
                    ref={containerRef}
                    className={classNames(style.container, 'w-3/4 h-full')}>
                    <Board boardRef={boardRef} />
                </div>
            </div>
        </DimensionContextProvider>
    );
}

function Board(props: { boardRef: RefObject<HTMLDivElement> }) {
    return (
        <div
            className={style.board}
            ref={props.boardRef}>
            <DimensionTop />
            <DimensionBottom />
            <DimensionLeft />
            <DimensionRight />
            <FrameOutside>
                <FrameInside />
            </FrameOutside>
        </div>
    );
}

function FrameOutside(props: PropsWithChildren) {
    return (
        <div
            className={classNames(
                frameStyle['frame'],
                frameStyle['frame-outside']
            )}>
            <div className={frameStyle[`frame-outside__top`]}></div>
            <div className={frameStyle[`frame-outside__left`]}></div>
            <div className={frameStyle[`frame-outside__right`]}></div>
            {props.children}
        </div>
    );
}

function DimensionTop() {
    return (
        <Dimension
            position="top"
            icons={[
                <svg
                    key={`dimension-top-1`}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(180, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>,
                <svg
                    key={`dimension-top-2`}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z" />
                </svg>,
            ]}
            defaultValue={DEFAULT_FRAME_WIDTH_SIZE}
        />
    );
}

function DimensionBottom() {
    return (
        <Dimension
            position="bottom"
            icons={[
                <svg
                    key={`dimension-bottom-1`}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(180, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>,
                <svg
                    key={`dimension-bottom-2`}
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z" />
                </svg>,
            ]}
            defaultValue={DEFAULT_FRAME_WIDTH_SIZE}
        />
    );
}

function DimensionRight() {
    return (
        <Dimension
            position="right"
            icons={[
                <svg
                    key="dimension-right-1"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(-90, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>,
                <svg
                    key="dimension-right-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(90, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>,
            ]}
            defaultValue={DEFAULT_FRAME_HEIGHT_SIZE}
        />
    );
}

function DimensionLeft() {
    return (
        <Dimension
            position="left"
            icons={[
                <svg
                    key="dimension-left-1"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(-90, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>,
                <svg
                    key="dimension-left-2"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(90, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>,
            ]}
            defaultValue={DEFAULT_FRAME_HEIGHT_SIZE}
        />
    );
}

function Dimension(props: {
    position: 'top' | 'left' | 'right' | 'bottom';
    icons: [JSX.Element, JSX.Element];
    defaultValue: number;
}) {
    const [value, handleChange, handleSubmit] = useDimensionHandler(
        props.defaultValue
    );

    return (
        <div
            className={classNames(
                style[`board__dimension`],
                style[`board__dimension--${props.position}`],
                style[`dimension`],
                style[`dimension--${props.position}`]
            )}>
            <div className={style[`dimension__marker`]}>{props.icons[0]}</div>

            <div className={style[`dimension__line`]}>
                <input
                    type="number"
                    inputMode="numeric"
                    className={style[`dimension__input`]}
                    onChange={handleChange}
                    onKeyUp={handleSubmit}
                    value={value}
                />
            </div>

            <div className={style[`dimension__marker`]}>{props.icons[1]}</div>
        </div>
    );
}

function DimensionContextProvider(props: ContextProps) {
    const [state, setState] = useState<ContextState>({
        outside: { width: 0, height: 0 },
        inside: {
            width: DEFAULT_FRAME_WIDTH_SIZE,
            height: DEFAULT_FRAME_HEIGHT_SIZE,
        },
    });

    return (
        <DimensionContext.Provider
            value={[state, withContextProxy(props, state, setState)]}>
            {props.children}
        </DimensionContext.Provider>
    );
}

function withContextProxy(
    props: ContextProps,
    context: ContextState,
    setContext: SetContext
) {
    const setProxyState = (newState: ContextState) => {
        const { width: containerWidth, height: containerHeight } =
            props.containerRef.current!.getBoundingClientRect();
        const { width, height } = newState.inside;

        if (width <= 200 || height <= 200) return;

        var currentWidth = containerWidth;
        var currentHeight = containerHeight;

        if (
            (containerHeight - DIMENSION_SIZE - PADDING_SIZE) / height <
            (containerWidth - DIMENSION_SIZE - PADDING_SIZE) / width
        ) {
            currentWidth = (currentHeight * width) / height;
            currentHeight = containerHeight - DIMENSION_SIZE - PADDING_SIZE;
        }

        currentWidth = containerWidth - DIMENSION_SIZE - PADDING_SIZE;
        currentHeight = (currentWidth * height) / width;

        applySizeAndScale(
            props.boardRef,
            { width: currentWidth, height: currentHeight },
            { width, height }
        );

        return setContext(() => ({ ...context, inside: { width, height } }));
    };

    return setProxyState;
}

function applySizeAndScale<T extends HTMLElement>(
    boardRef: RefObject<T>,
    board: { width: number; height: number },
    frame: { width: number; height: number }
) {
    boardRef.current!.style.width = `${board.width + DIMENSION_SIZE}px`;
    boardRef.current!.style.height = `${board.height + DIMENSION_SIZE}px`;
    document.documentElement.style.setProperty(
        '--inside-frame-width',
        `${frame.width}px`
    );
    document.documentElement.style.setProperty(
        '--inside-frame-height',
        `${frame.height}px`
    );
    let frameScaleHeight = board.height / frame.height;
    let frameScaleWidth = board.width / frame.width;
    let frameScale = (frameScaleWidth + frameScaleHeight) / 2;
    document.documentElement.style.setProperty(
        '--frame-scale',
        frameScale.toString()
    );
}

function useDimensionHandler(defaultValue: number): UseDimensionHandler {
    const [context, setContext] = useContext(DimensionContext)!;
    const [value, setValue] = useState<string>(defaultValue.toString());

    const onSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase() === KEYBOARD_ENTER) {
            setContext({
                ...context.inside,
                ...context.outside,
                inside: { width: parseFloat(value!) },
            });
        }
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(() => event.target.value);
    };

    return [value, onChange, onSubmit];
}

type ContextProps = PropsWithChildren<{
    boardRef: RefObject<HTMLDivElement>;
    containerRef: RefObject<HTMLDivElement>;
}>;

type ContextState = {
    inside: {
        width: number;
        height: number;
    };

    outside: {
        width: number;
        height: number;
    };
};

type SetContext = (
    state: ContextState | ((state: ContextState) => ContextState)
) => any;

type UseDimensionHandler = [
    string,
    (event: React.ChangeEvent<HTMLInputElement>) => void,
    (event: KeyboardEvent<HTMLInputElement>) => void
];
