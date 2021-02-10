import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideosComponent } from './components/videos/videos.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { NavComponent } from './components/nav/nav.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
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
      },
      {
        path:'play/:id',
        component:VideoPlayerComponent
      },
      {
        path:'create-event',
        component:CreateEventComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
