import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Video } from 'src/app/models/Video';

import videojs from 'video.js';
import { ActivatedRoute, Params } from '@angular/router';
import { FilesService } from '../../../services/files/files.service';
import { Files } from 'src/app/models/Files.model';
import { VideosComponent } from '../videos/videos.component';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css'] 
})
export class VideoPlayerComponent implements OnInit,OnDestroy {

  public isLike:boolean=false;
  player: videojs.Player;
  myfile:Files=null;
  favorites=0;
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
    // this.fileService.get(id).subscribe( item=>{
    //   this.myfile=new Files(item.id,item.name,item.slug,item.path,item.type);
    // }
    // );
    this.myfile = (new Files(1,'Video test','slug','../../../../assets/videos/prueba.mp4',1));

    
  }
  likeVideo()
  {
    if(this.isLike===true)
    {
      this.isLike=false;
    }
    else{
      this.isLike=true;
    }
  }
}

