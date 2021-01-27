import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavComponent } from './nav/nav.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    NavComponent,
    UploadVideoComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
