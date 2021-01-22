import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import {RegisterComponent} from './components/register/register.component';
const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
