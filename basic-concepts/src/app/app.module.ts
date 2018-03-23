import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { SamplesComponent } from './components/samples/samples.component';


//routers
import { AppRoutingModule } from './routers/app/app-routing.module';
import { EagerComponent } from './components/eager/eager.component';
//import { LazyComponent } from './components/lazy/lazy.component';



@NgModule({
  declarations: [
    AppComponent,
    SamplesComponent,
    EagerComponent,
    //LazyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
