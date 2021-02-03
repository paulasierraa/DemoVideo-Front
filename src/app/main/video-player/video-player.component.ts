import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Video } from 'src/app/models/Video';

import videojs from 'video.js';
import { VideoService } from '../../services/video/video.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'] 
})
export class VideoPlayerComponent implements OnInit,OnDestroy {

 
  player: videojs.Player;
  video:Video={} as Video;

  constructor(
    private elementRef: ElementRef, private videoService:VideoService,private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
        this.fetchVideo(params.id);
    });
  }

  ngOnDestroy() {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }
  fetchVideo(id:string)
  {
    this.videoService.get(id).subscribe( video=>{
      this.video=video;
    }

    );
    
  }
}

