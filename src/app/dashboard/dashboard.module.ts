import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {NavComponent} from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { EventDetailComponent } from '../events/components/event-detail/event-detail.component';
import { EventComponent } from '../events/components/event/event.component';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
  NavComponent,
  LoginComponent,
  RegisterComponent,
  FooterComponent,
  EventDetailComponent,
  EventComponent,
  AuthComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboardModule { }
