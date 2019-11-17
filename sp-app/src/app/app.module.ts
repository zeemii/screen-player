import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinsComponent } from './components/coins/coins.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ChartistModule } from 'ng-chartist';
import { HomeComponent } from './components/home/home.component';
import { View2Component } from './components/view2/view2.component';
import { View3Component } from './components/view3/view3.component';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    HomeComponent,
    View2Component,
    View3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartistModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
