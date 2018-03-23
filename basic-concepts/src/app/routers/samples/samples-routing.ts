import { Routes } from '@angular/router';

import { EagerComponent }    from './../../components/eager/eager.component';
//import { DogDetailsComponent }    from './dog-details.component';

// Route Configuration
export const SamplesRoutes: Routes = [
  { path: 'samples/eager', component: EagerComponent },
  { path: 'samples/lazy', loadChildren: '../../modules/lazy/lazy.module#LazyModule' }
];
