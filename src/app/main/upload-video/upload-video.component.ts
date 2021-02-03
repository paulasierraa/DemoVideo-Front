import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { VideoService } from '../../services/video/video.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Video } from '../../models/Video';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];
  form:FormGroup;
  url;
  constructor(private sanitizer:DomSanitizer,private formBuilder:FormBuilder,private videoService:VideoService) { }
  //creamos un array para guardar los videos
  myFiles:string|File;
  myVideos:Video;
  enviado:boolean=false;

  ngOnInit() {
    this.buildUpload();
  }
  buildUpload()
  {
    this.form = this.formBuilder.group(
      {
        name:['',Validators.required],
        description:['',Validators.required],
        video:['',Validators.required]
      }
    );
  }
 
  getFileDetails(e){
      this.myFiles=e.target.files;
  }

  public uploadVideo()
  {
    this.enviado=true;

    const formData = new FormData();
    let objVideo:Video = new Video();
    const value = this.form.value;

    objVideo.name=value.name;
    objVideo.description=value.description;
    objVideo.url = URL.createObjectURL(this.myFiles[0]);
    formData.append("videoFile",this.myFiles[0]);
    this.url= this.sanitizer.bypassSecurityTrustUrl(objVideo.url);
    //llamamos el servicio
    
  }
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    
    // if (this.files[0].fileEntry.isFile) {
    //   const fileEntry = this.files[0].fileEntry as FileSystemFileEntry;
    //   fileEntry.file((file: File) => {
    //     console.log("Ento al if: ", file);
    //     this.myFiles[0]=file;
    //   });
    // }

    // for (const droppedFile of files) {
    //   // Is it a file?
    //   if (droppedFile.fileEntry.isFile) {
    //     const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
    //     fileEntry.file((file: File) => {
 
    //       // Here you can access the real file
    //       console.log("Ento al if: ",droppedFile.relativePath, file);
          
    //       /**
    //       // You could upload it like this:
    //       const formData = new FormData()
    //       formData.append('logo', file, relativePath)
 
    //       // Headers
    //       const headers = new HttpHeaders({
    //         'security-token': 'mytoken'
    //       })
 
    //       this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
    //       .subscribe(data => {
    //         // Sanitized logo returned from backend
    //       })
    //       **/
 
    //     });
    //   } else {
    //     // It was a directory (empty directories are added, otherwise only files)
    //     const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
    //     console.log(droppedFile.relativePath, fileEntry);
    //   }
    // }
  }
  public fileOver(event:Event){
    console.log(event);
  }
 
  public fileLeave(event:Event){
    console.log(event);
  }
  public deleteVideo():void{
    this.files=[];
  }
}

  