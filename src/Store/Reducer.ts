import {useReducer} from 'react';
import {applyMiddleware} from './middleware';
import {InitialState, AppDispatch} from '../Types/types';
import {GET_SEARCH_DATA, LOADING, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE} from '../Store/actions';
import {SearchDataActions} from '../Types/types';

const Reducer = (state: InitialState, action: SearchDataActions) => {
    switch(action.type) {
        case GET_SEARCH_DATA:
            return {
            ...state
            }
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case SEARCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
            }
        case SEARCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                failure: true
            }
        default:
            return {
                ...state
            }
    }
};

const MiddleReducer = (initialState: InitialState): [InitialState, AppDispatch] => {
    const [state, dispatch] = useReducer<React.Reducer<InitialState, SearchDataActions>>(Reducer, initialState);

    const passthroughDispatch = (action: SearchDataActions) => {
        applyMiddleware(action, dispatch);
    }

    return [state, passthroughDispatch];
}
    
export default MiddleReducer;