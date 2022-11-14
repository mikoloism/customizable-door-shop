import classNames from 'classnames';
import { FrameTemplate1 } from 'components/organisms/FrameTemplate1';
import {
    createContext,
    KeyboardEvent,
    PropsWithChildren,
    RefObject,
    useContext,
    useRef,
    useState,
} from 'react';
import style from 'styles/home.module.scss';

const KEYBOARD_ENTER = 'enter';
const DEFAULT_WIDTH_SIZE = 500;
const DEFAULT_HEIGHT_SIZE = 800;
const PADDING_SIZE = 32;
const DIMENSION_SIZE = 48;

const FormContext = createContext<[StateContext, any] | null>(null);

export function HomeTemplate() {
    const gridRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <FormContextProvider
            containerRef={containerRef}
            gridRef={gridRef}>
            <div className="w-screen h-screen flex flex-wrap flex-col">
                <div className="flex flex-wrap flex-row w-1/4 h-full border-r-4 border-black"></div>
                <div
                    className={classNames(
                        style.container,
                        'flex flex-wrap flex-row w-3/4 h-full place-content-center place-items-center overflow-hidden'
                    )}
                    ref={containerRef}>
                    <div
                        className={style.template}
                        ref={gridRef}>
                        <DimensionTop />
                        <DimensionRight />
                        <FrameTemplate1 />
                    </div>
                </div>
            </div>
        </FormContextProvider>
    );
}

function DimensionTop() {
    const [context, setContext] = useContext(FormContext)!;
    const [value, setValue] = useState<string>(DEFAULT_WIDTH_SIZE.toString());

    const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase() === KEYBOARD_ENTER) {
            setContext({ width: parseFloat(value!), height: context.height });
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(() => event.target.value);
    };

    return (
        <div
            className={classNames(
                style[`template__dimension`],
                style[`template__dimension--top`],
                style.dimension
            )}>
            <div className={style.dimension_top__marker}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(180, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>
            </div>

            <div
                className={classNames(
                    style.dimension_top__line,
                    style['line'],
                    style['line--top']
                )}>
                <input
                    type="number"
                    inputMode="numeric"
                    className={style.line__input}
                    onChange={handleChange}
                    onKeyUp={handleSubmit}
                    value={value}
                />
            </div>

            <div className={style.dimension_top__marker}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z" />
                </svg>
            </div>
        </div>
    );
}

function DimensionRight() {
    const [context, setContext] = useContext(FormContext)!;
    const [value, setValue] = useState<string>(DEFAULT_HEIGHT_SIZE.toString());

    const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key.toLowerCase() === KEYBOARD_ENTER) {
            setContext({ height: parseFloat(value!), width: context.width });
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(() => event.target.value);
    };

    return (
        <div
            className={classNames(
                style[`template__dimension`],
                style[`template__dimension--right`],
                style.dimension
            )}>
            <div className={style.dimension_right__marker}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(-90, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>
            </div>

            <div
                className={classNames(
                    style.dimension_right__line,
                    style['line'],
                    style['line--right']
                )}>
                <input
                    type="number"
                    inputMode="numeric"
                    className={style.line__input}
                    onChange={handleChange}
                    onKeyUp={handleSubmit}
                    value={value}
                />
            </div>

            <div className={style.dimension_right__marker}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    width="48">
                    <path
                        transform="rotate(90, 24, 24)"
                        d="M27 34.85q-.45-.45-.45-1.075t.4-1.025l7.35-7.35H9.5q-.65 0-1.075-.425Q8 24.55 8 23.9q0-.65.425-1.075Q8.85 22.4 9.5 22.4h24.8L26.9 15q-.45-.45-.425-1.05.025-.6.475-1.05.45-.4 1.075-.4t1.025.4L39 22.85q.25.25.35.5.1.25.1.55 0 .3-.1.55-.1.25-.35.5l-9.9 9.9q-.45.45-1.05.45-.6 0-1.05-.45Z"
                    />
                </svg>
            </div>
        </div>
    );
}

function FormContextProvider(props: ContextProps) {
    const [state, setState] = useState<StateContext>({
        width: DEFAULT_WIDTH_SIZE,
        height: DEFAULT_HEIGHT_SIZE,
    });

    return (
        <FormContext.Provider
            value={[state, withContextProxy(props, state, setState)]}>
            {props.children}
        </FormContext.Provider>
    );
}

function withContextProxy(
    props: ContextProps,
    context: StateContext,
    setContext: (p: any) => any
) {
    const setProxyState = (newState: any) => {
        const { width: containerWidth, height: containerHeight } =
            props.containerRef.current!.getBoundingClientRect();
        const { width, height } = newState;

        if (width <= 200 || height <= 200) return;

        if (
            (containerHeight - DIMENSION_SIZE - PADDING_SIZE) / height <
            (containerWidth - DIMENSION_SIZE - PADDING_SIZE) / width
        ) {
            let currentHeight = containerHeight - DIMENSION_SIZE - PADDING_SIZE;
            let currentWidth = (currentHeight * width) / height;

            props.gridRef.current!.style.width = `${
                currentWidth + DIMENSION_SIZE
            }px`;
            props.gridRef.current!.style.height = `${
                currentHeight + DIMENSION_SIZE
            }px`;
            document.documentElement.style.setProperty(
                '--door-width',
                `${width}px`
            );
            document.documentElement.style.setProperty(
                '--door-height',
                `${height}px`
            );

            let doorScaleHeight = currentHeight / height;
            let doorScaleWidth = currentWidth / width;
            let doorScale = (doorScaleWidth + doorScaleHeight) / 2;
            document.documentElement.style.setProperty(
                '--door-scale',
                doorScale.toString()
            );

            return setContext(() => ({ ...context, width, height }));
        }

        let currentWidth = containerWidth - DIMENSION_SIZE - PADDING_SIZE;
        let currentHeight = (currentWidth * height) / width;

        props.gridRef.current!.style.width = `${
            currentWidth + DIMENSION_SIZE
        }px`;
        props.gridRef.current!.style.height = `${
            currentHeight + DIMENSION_SIZE
        }px`;
        document.documentElement.style.setProperty(
            '--door-width',
            `${width}px`
        );
        document.documentElement.style.setProperty(
            '--door-height',
            `${height}px`
        );
        let doorScaleHeight = currentHeight / height;
        let doorScaleWidth = currentWidth / width;
        let doorScale = (doorScaleWidth + doorScaleHeight) / 2;
        document.documentElement.style.setProperty(
            '--door-scale',
            doorScale.toString()
        );

        return setContext(() => ({ ...context, width, height }));
    };

    return setProxyState;
}

type StateContext = {
    width: number;
    height: number;
};

type SetStateContext = (state: StateContext) => any;

type ContextProps = PropsWithChildren<{
    gridRef: RefObject<HTMLDivElement>;
    containerRef: RefObject<HTMLDivElement>;
}>;
