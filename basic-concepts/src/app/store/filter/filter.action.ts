import {Injectable} from '@angular/core';
import {Store, Action} from '@ngrx/store';

import {createAction} from '../createAction';
import {AppState} from '../../models/appState';

export const UPDATE_TIMERANGE = 'UPDATE_TIMERANGE';

@Injectable()
export class FilterAction implements Action{
    type = UPDATE_TIMERANGE;
    //constructor(private store: Store<AppState>){}

    //updateTimeRange(timerange) {
    //    this.store.dispatch(createAction(FilterAction.UPDATE_TIMERANGE, timerange));
    //}

}