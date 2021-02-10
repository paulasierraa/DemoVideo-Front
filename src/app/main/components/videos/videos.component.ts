import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../../services/video/video.service';
import { Video } from '../../../models/Video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos:Video[]=[];
  constructor(private videoService:VideoService) { }

  ngOnInit() {
    this.videoService.getAll().subscribe(data=>{
      this.videos=data;
    }); 
  }

}