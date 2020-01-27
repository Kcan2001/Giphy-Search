import React, {createContext, ReactNode} from 'react';
import MiddleReducer from './Reducer';
import {AppDispatch} from '../Types/types';

export const initialState = {
    data: null, 
    loading: false,
    failure: false
};

type Props = {
    children: ReactNode
}

const Store = ( { children }: Props)  => {
        const [state, dispatch] = MiddleReducer(initialState);

    return (
        <GlobalState.Provider value={state}>
            <Dispatch.Provider value={dispatch}>
                {children}
            </Dispatch.Provider>
        </GlobalState.Provider>
    )
};

export const GlobalState = createContext(initialState);
export const Dispatch = createContext({} as AppDispatch);
export default Store;