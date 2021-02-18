import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { from } from 'rxjs';
import { LoginGuard } from './guards/login/login.guard';
const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
  {
    path:'home',
    // canActivate:[LoginGuard], 
    loadChildren:()=>import('./main/main.module').then(m=>m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
