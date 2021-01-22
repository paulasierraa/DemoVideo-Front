import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {NavComponent} from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
  DashboardComponent,
  NavComponent,
  LoginComponent,
  RegisterComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
