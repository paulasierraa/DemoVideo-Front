import { Component, OnInit } from '@angular/core';
import { Files } from 'src/app/models/Files.model';

import { Video } from '../../../models/Video';
import { FilesService } from '../../../services/files/files.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  files:Files[]=[
 
  ];
  constructor(private filesService:FilesService) { }
  ngOnInit() {
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));
    this.files.push(new Files(1,'Video test','slug','D:\DEV\temp\DemoVideo-Front\src\assets\videos\prueba.mp4',1));



  //  this.fetchFiles();
  }
  fetchFiles(){
    this.filesService.getAll().subscribe(data=>{
      data.forEach((element,index)=>{
        this.files[index] = new Files(element.id,element.name,element.slug,element.path,element.type);
      });
    });
  }
}
