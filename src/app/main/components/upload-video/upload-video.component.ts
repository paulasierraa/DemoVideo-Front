import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { VideoService } from '../../../services/video/video.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Video } from '../../../models/Video';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];
  form:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder,private videoService:VideoService) { }
 
  //creamos un array para guardar los videos
  myFile:File;
  enviado:boolean=false;
  state:boolean=false;

  ngOnInit() {
    this.buildUpload();
  }
  buildUpload()
  {
    this.form = this.formBuilder.group(
      {
        name:['',Validators.required],
        description:['',Validators.required],
        video:['',Validators.required],
      }
    );
  }
 
  getFileDetails(e){
     
      this.myFile=<File>e.target.files[0];
      this.validateType();
  }

  public uploadVideo()
  {
    if(this.form.valid&&this.myFile!=undefined)
    {
      const formData = new FormData();
      const value = this.form.value;
  
      formData.append("name",value.name);
      formData.append("description",value.description);
      formData.append("videofile",this.myFile);
      console.log(this.myFile.size);
      
  
      // this.videoService.upload(formData).subscribe(data=>{
      //   this.enviado=true;
      //   setTimeout(()=>(this.router.navigate(['/home/videos'])),1200);
        
      // });
    }
 
  }
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    if (this.files[0].fileEntry.isFile) {
      const fileEntry = this.files[0].fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        
        this.myFile=file;
        this.validateType();
      });
    }
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
  public isValid():boolean{
    if(this.form.valid&&this.myFile!=undefined)
    {
      return true;
    }
    return false;
  }
  public validateType():void{

    if(this.myFile!==undefined)
    if(!this.myFile.type.includes("video")&&!this.myFile.type.includes("image"))
    {
        this.myFile=null;
        this.form.get('video').reset();
        this.deleteVideo();
    }
  }
  
  
}



