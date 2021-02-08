import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import {RegisterComponent} from './components/register/register.component';
import { ChallengeInfoComponent } from './components/challenge-info/challenge-info.component';
const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'information',
        component: ChallengeInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
