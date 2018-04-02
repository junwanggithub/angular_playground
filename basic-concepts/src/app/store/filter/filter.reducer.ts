import {UnsafeAction} from '../createAction';

import {FilterAction} from './filter.action';

import {GlobalFilter} from '../../models/filters'

export const initialState: GlobalFilter = { timerange: 'twohours'};

export function globalFilterReducer(state = initialState, action: UnsafeAction) {
    switch (action.type) {
        //case FilterAction.UPDATE_TIMERANGE:
        //    state.timerange = action.payload;
        //    return (<any>Object).assign({}, state);
        default:
            return state;
    }
}