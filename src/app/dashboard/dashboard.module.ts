import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {NavComponent} from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { ChallengeComponent } from '../challenge/components/challenge/challenge.component';
import { ChallengeInfoComponent } from '../challenge/components/challenge-info/challenge-info.component';

@NgModule({
  declarations: [
  NavComponent,
  LoginComponent,
  RegisterComponent,
  FooterComponent,
  ChallengeComponent,
  ChallengeInfoComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
