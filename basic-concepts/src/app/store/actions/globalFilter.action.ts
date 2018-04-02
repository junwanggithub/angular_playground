import { Action } from '@ngrx/store';

import { GlobalFilter } from '../../models/filters';
//Actions const strings
export const LOAD_GLOBAL_FILTERS = '[GLOBAL FILTER] LOAD GLOBAL FILTER';
export const LOAD_GLOBAL_FILTERS_FAIL = '[GLOBAL FILTER] LOAD GLOBAL FILTER FAIL';
export const LOAD_GLOBAL_FILTERS_SUCCESS = '[GLOBAL FILTER] LOAD GLOBAL FILTER SUCCESS';

export class LoadGlobalFilters implements Action{
    readonly type = LOAD_GLOBAL_FILTERS;
    constructor(public payload: any) {}
}

export class LoadGlobalFiltersFail implements Action{
    readonly type = LOAD_GLOBAL_FILTERS_FAIL;
    constructor(public payload: any) {}
}

export class LoadGlobalFiltersSuccess implements Action{
    readonly type = LOAD_GLOBAL_FILTERS_SUCCESS;
    constructor(public payload: GlobalFilter) {}
}

export type GlobalFilterAction = LoadGlobalFilters | LoadGlobalFiltersFail | LoadGlobalFiltersSuccess;
