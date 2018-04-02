import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { SamplesComponent } from './../../components/samples/samples.component';

//routes
import { SamplesRoutes }    from './../samples/samples-routing';


const appRoutes: Routes = [
  {
    path: 'samples',
    component:  <any>SamplesComponent
  },
  //{ path: '',
  //  redirectTo: '/samples',
  //  pathMatch: 'full'
  //},
  //{ path: '**', component: SamplesComponent }
  ...SamplesRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
