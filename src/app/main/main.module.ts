import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { UploadVideoComponent } from './components/upload-video/upload-video.component';
import { VideosComponent } from './components/videos/videos.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateEventComponent } from './components/create-event/create-event.component';


@NgModule({
  declarations: [
    NavComponent,
    UploadVideoComponent,
    VideosComponent,
    VideoPlayerComponent,
    CreateEventComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgxFileDropModule,
    ReactiveFormsModule,
    FormsModule
  ],

})

export class MainModule { }
