import { createContext, PropsWithChildren, useState } from 'react';

const DoorContext = createContext<[ContextState, SetContext] | null>(null);

function DoorContextProvider(props: PropsWithChildren) {
    const [context, setContext] = useState<ContextState>({});

    return (
        <DoorContext.Provider value={[context, setContext]}>
            {props.children}
        </DoorContext.Provider>
    );
}

export type ContextState = {};
export type SetContext = (context: any) => any;

export default DoorContext;
export { DoorContextProvider };
