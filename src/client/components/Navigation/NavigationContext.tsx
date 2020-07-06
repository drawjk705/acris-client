import React, { useReducer } from 'react';

type TNavigationAction = {
    type: 'createRef';
    payload: TNavigationItem;
};

export type TNavigationState = {
    refs: TNavigationItem[];
};

const navigationReducer = (
    state: TNavigationState,
    action: TNavigationAction
) => {
    switch (action.type) {
        case 'createRef':
            return { refs: [...state.refs, action.payload] };
        default:
            return state;
    }
};

export type TNavigationItem = {
    header: string;
    ref: React.MutableRefObject<any>;
    children?: TNavigationItem[];
};

interface INavigationContext {
    state: TNavigationState;
    dispatch: React.Dispatch<TNavigationAction>;
}

const defaultContext: INavigationContext = {
    state: { refs: [] },
    dispatch: () => {},
};

export const NavigationContext = React.createContext<INavigationContext>(
    defaultContext
);

export const NavigationProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(navigationReducer, { refs: [] });

    return (
        <NavigationContext.Provider value={{ state, dispatch }}>
            {children}
        </NavigationContext.Provider>
    );
};
