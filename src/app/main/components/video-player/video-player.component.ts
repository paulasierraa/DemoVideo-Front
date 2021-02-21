import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Video } from 'src/app/models/Video';

import videojs from 'video.js';
import { ActivatedRoute, Params } from '@angular/router';
import { FilesService } from '../../../services/files/files.service';
import { Files } from 'src/app/models/Files.model';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'] 
})
export class VideoPlayerComponent implements OnInit,OnDestroy {

 
  player: videojs.Player;
  myfile:Files;

  constructor(
    private elementRef: ElementRef, private fileService:FilesService,private route:ActivatedRoute
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
    this.fileService.get(id).subscribe( item=>{
      debugger;
      this.myfile=new Files(item.id,item.name,item.slug,item.path,item.type);
    }
    );
    
  }
}

