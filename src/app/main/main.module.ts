import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavComponent } from './nav/nav.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { VideosComponent } from './videos/videos.component';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [
    NavComponent,
    UploadVideoComponent,
    VideosComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxFileDropModule
  ],

})
  // exports:[
  //   NavComponent
  // ] 
export class MainModule { }
