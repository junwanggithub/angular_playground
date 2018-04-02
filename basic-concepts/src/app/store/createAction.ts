import {Action} from '@ngrx/store';

//export interface ActionWithPayload<T> extends Action {
//    type: string;
//    payload: T;
//}

export interface UnsafeAction extends Action {
    payload?: any;
}

export function createAction(type, payload?): UnsafeAction {
    return { type, payload };
}