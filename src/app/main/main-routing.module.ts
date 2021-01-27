import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { NavComponent } from './nav/nav.component';
const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'videos',
        component:VideosComponent
      },
      {
        path:'upload',
        component:UploadVideoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
