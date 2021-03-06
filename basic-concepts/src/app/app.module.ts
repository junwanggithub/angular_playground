import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  //CdkTableModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  exports: [
    //CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class MaterialModule {}

import { reducers } from './store/index';

//import 'rxjs/Rx';

import {globalFilterReducer} from './store/filter/filter.reducer';
import {FilterAction} from './store/filter/filter.action'
import {FiltersService} from './services/filters/filters.service'


//routers
import { AppRoutingModule } from './routers/app/app-routing.module';

//components
import { AppComponent } from './app.component';
import { SamplesComponent } from './components/samples/samples.component';
import { EagerComponent } from './components/eager/eager.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
import { Ngrxsharedfilter1Component } from './components/ngrxsharedfilter1/ngrxsharedfilter1.component';
import { Ngrxsharedfilter2Component } from './components/ngrxsharedfilter2/ngrxsharedfilter2.component';
//import { LazyComponent } from './components/lazy/lazy.component';



@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    EagerComponent,
    NgrxComponent,
    Ngrxsharedfilter1Component,
    Ngrxsharedfilter2Component,
    //LazyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('app', reducers),
    MaterialModule
    //StoreModule.forRoot({state: globalFilterReducer})

  ],
  providers: [
    FilterAction,
    FiltersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
