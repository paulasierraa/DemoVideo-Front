import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginComponent } from '../../../dashboard/components/login/login.component';
import { DomSanitizer } from '@angular/platform-browser';
import { FilesService } from '../../../services/files/files.service';

@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css']
})
export class UploadVideoComponent implements OnInit {
  public files: NgxFileDropEntry[] = [];
  form:FormGroup;
  url=null;
  duration:string;
  videoError:boolean=false;
  constructor(private router:Router,
    private formBuilder:FormBuilder
    ,private filesService:FilesService,
    private sanitizer:DomSanitizer) { }
 
  //creamos un array para guardar los videos
  myFile:File;
  enviado:boolean=false;
  selected:boolean=false;

  ngOnInit() {
    this.buildUpload(); //construimos el formulario
    LoginComponent.loginEvent=false;
  }

  buildUpload()
  {
    this.form = this.formBuilder.group(
      {
        name:['',Validators.required],
        // description:['',[Validators.required,Validators.minLength(10)]],
      }
    );
  }


  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    if (this.files[0].fileEntry.isFile) {
      const fileEntry = this.files[0].fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => { 
        this.myFile=file;
       this.url =  this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.myFile));
       this.validateType();
       setTimeout(()=>( this.validateDuration()),1000);
      
      });
    }
    
  }
  public uploadVideo()
  {
    if(this.form.valid&&this.myFile!=undefined)
    {
      const formData = new FormData();
      const value = this.form.value;
      formData.append("name",value.name);
      let slug=value.name;
      slug.trim();
      formData.append("slug",slug.split(" ").join("-"));
      formData.append("path",this.myFile);
      formData.append("type","1");
      this.filesService.upload(formData).subscribe(data=>{
        this.enviado=true;
        console.log(formData);
        setTimeout(()=>(this.router.navigate(['/home/videos'])),1200);
        
      });
    }
 
  }
 
  public deleteVideo():void{
    this.myFile=null;
    this.url=null;
    this.files=[];
  }
  public isValid():boolean{
    if(this.form.valid&&this.myFile!=undefined)
    {
      return true;
    }
    return false;
  }
  public validateType():void{ //elimina los archivos que no son de tipo video o imagen

    if(this.myFile!==undefined)
    console.log(this.myFile.type);
    if(!this.myFile.type.includes("video")&&!this.myFile.type.includes("image"))
    {
        // this.form.get('video').reset();
        this.myFile=null;
        this.deleteVideo();
    }
  }

  validateDuration()
  {
    if(this.url!=null)
    {
      let item:any = document.getElementById("video");
      let duration = item.duration;
      console.log(duration);
      if(duration>300)
      {
        this.videoError=true;
        this.deleteVideo();
      }
      else{
        this.videoError=false;
      }
    }

  }
}



