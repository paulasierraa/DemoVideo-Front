import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
