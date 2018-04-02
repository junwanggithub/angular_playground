import { Routes } from '@angular/router';

import { EagerComponent }    from './../../components/eager/eager.component';
import { NgrxComponent } from './../../components/ngrx/ngrx.component';
import { Ngrxsharedfilter1Component } from './../../components/ngrxsharedfilter1/ngrxsharedfilter1.component';
import { Ngrxsharedfilter2Component } from './../../components/ngrxsharedfilter2/ngrxsharedfilter2.component';
//import { DogDetailsComponent }    from './dog-details.component';

// Route Configuration
export const SamplesRoutes: Routes = [
  { path: 'samples/eager', component: EagerComponent },
  { path: 'samples/lazy', loadChildren: '../../modules/lazy/lazy.module#LazyModule' },
  { path: 'samples/ngrx', component: NgrxComponent },
  { path: 'samples/ngrx/sharedfilter1', component: Ngrxsharedfilter1Component },
  { path: 'samples/ngrx/sharedfilter2', component: Ngrxsharedfilter2Component }
];
