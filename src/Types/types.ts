import {GET_SEARCH_DATA, LOADING, SEARCH_DATA_SUCCESS, SEARCH_DATA_FAILURE} from '../Store/actions';

interface GetSearchDataAction {
    type: typeof GET_SEARCH_DATA,
    payload: string
  }

  interface GetLoadingAction {
    type: typeof LOADING,
    payload: null
  }

  interface GetSearchDataSuccess {
    type: typeof SEARCH_DATA_SUCCESS,
    payload: {}
  }

  interface GetSearchDataFailure {
    type: typeof SEARCH_DATA_FAILURE,
    payload: null
  }

  interface IState {
    data: any, 
    loading: boolean,
    failure: boolean
  }

  export type AppDispatch = ({type, payload}:{type:string, payload: {}}) => void;
  export type InitialState = IState;
  export type SearchDataActions = | GetSearchDataAction | GetLoadingAction | GetSearchDataSuccess | GetSearchDataFailure;

