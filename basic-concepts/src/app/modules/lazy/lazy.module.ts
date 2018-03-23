import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';

//components
import { LazyComponent } from './../../components/lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
