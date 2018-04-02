import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { LazyComponent } from './../../components/lazy/lazy.component';


const routes: Routes = [
  { path: '', component: <any>LazyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
