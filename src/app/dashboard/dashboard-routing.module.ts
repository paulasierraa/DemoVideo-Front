import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import {RegisterComponent} from './components/register/register.component';
import { EventDetailComponent } from '../events/components/event-detail/event-detail.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'login',
        component:AuthComponent
      },
      {
        path:'register',
        component:AuthComponent
      },
      {
        path:'information',
        component: EventDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
