import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

//ngrx
import {AppState} from '../../models/appState';
//import {FilterAction} from '../../store/filter/filter.action'
//import {FiltersService} from "../../services/filters/filters.service";
import * as fromStore from '../../store/index';
import * as fromGlobalFilterActions from '../../store/actions/globalFilter.action';

@Component({
  selector: 'app-ngrxsharedfilter2',
  templateUrl: './ngrxsharedfilter2.component.html',
  styleUrls: ['./ngrxsharedfilter2.component.css']
})
export class Ngrxsharedfilter2Component implements OnInit {

  //private timerange$: Observable<string>;
  private timerange;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
    this.store.select<any>('app').subscribe(state => {
      this.timerange = state.globalFilter.data.timerange || 'twohours';
      console.log(state);
    });
    //let temp = this.store.select((state)=>{
    //  return state.filters.globalFilter.timerange
    //});
    //this.timerange$ = temp;
    //this.timerange$ = this.filtersService.getCurrentGlobalTimerange();
  }

  updateFilter() {
    this.store.dispatch(new fromGlobalFilterActions.LoadGlobalFilters(this.timerange));

    //this.filterAction.updateTimeRange(value);
  }

}
