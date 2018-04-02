import { ActionReducerMap } from '@ngrx/store';

import * as fromGlobalFilter from './globalFilter.reducer';


export interface AppState {
    globalFilter: fromGlobalFilter.GlobalFilterState
}


export const reducers:ActionReducerMap<AppState> = {
    globalFilter: fromGlobalFilter.reducer,
}