import {baseUrl, queryParams} from '../Services/paths';
import {SearchDataActions, AppDispatch} from '../Types/types';
import {GET_SEARCH_DATA, LOADING, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE} from '../Store/actions';

export const applyMiddleware = (action: SearchDataActions, dispatch: AppDispatch) => {
switch(action.type) {
    case GET_SEARCH_DATA:
        dispatch({type: LOADING, payload: ''});
        fetch(`${baseUrl}&q=${action.payload}${queryParams}`)
        .then((response) => {return response.json();})
        .then(data => dispatch({type: SEARCH_DATA_SUCCESS, payload: data.data}))
        .catch(error => dispatch({type: SEARCH_DATA_FAILURE, payload: ''}));
        break;
    };
}