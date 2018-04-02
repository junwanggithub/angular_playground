import * as fromGlobalFilterActions from '../actions/globalFilter.action';
import { GlobalFilter } from '../../models/filters';

export interface GlobalFilterState {
    data?: GlobalFilter,
    loaded: boolean,
    loading: boolean
}

export const initialState: GlobalFilterState = {
    data: {},
    loaded: false,
    loading: false
}

export function reducer (
    state:GlobalFilterState = initialState,
    action: fromGlobalFilterActions.GlobalFilterAction
): GlobalFilterState {
    switch(action.type) {
        case fromGlobalFilterActions.LOAD_GLOBAL_FILTERS: {
            return {
                ...state,
                data: {
                    timerange: action.payload
                },
                loading: true,
                loaded: false

            };
        }

        case fromGlobalFilterActions.LOAD_GLOBAL_FILTERS_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: true

            };
        }

        case fromGlobalFilterActions.LOAD_GLOBAL_FILTERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: false

            };
        }
    }

    return state;
}
