import { Injectable } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

import {AppState} from '../../models/appState';
import {GlobalFilter} from '../../models/filters';

@Injectable()
export class FiltersService {

  constructor(private appStore: Store<AppState>) { }

  getCurrentGlobalFilter(): Observable<any> {
    return this.appStore.select(appState => appState.filters.globalFilter);
  }

  //getCurrentGlobalTimerange(): Observable<string> {
  //  return this.appStore.select('filters').subscribe(cw => {
  //    console.log('subscribe store', cw);
  //  })
  //}
}
