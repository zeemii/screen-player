import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CoinsComponent} from "./components/coins/coins.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {View2Component} from "./components/view2/view2.component";
import {View3Component} from "./components/view3/view3.component";


const routes: Routes = [
  {
    path: 'coins',
    component: CoinsComponent
  },
  {
    path: 'view2',
    component: View2Component
  }, {
    path: 'view3',
    component: View3Component
  },
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
