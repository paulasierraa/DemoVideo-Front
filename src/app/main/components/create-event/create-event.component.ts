import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  today:String;
  form:FormGroup;
  public files: NgxFileDropEntry[] = [];
  myFile:File;

  constructor(private router:Router,private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
    const actualDate= new Date();
    this.today= (actualDate.getFullYear()+"-"+actualDate.getUTCMonth()+"-"+actualDate.getDay()).toString();
    console.log(this.today);
    this.buildCreateEvent();
  }
  buildCreateEvent()
  { 
    this.form= this.FormBuilder.group({
      name:['',Validators.required],
      description:['',[Validators.required,Validators.minLength(10)]],
      prize:['',[Validators.required,Validators.pattern("[0-9]+")]],
      initialDate:['',[Validators.required]],
      finalDate:['',[Validators.required]],
    });

  }
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    if (this.files[0].fileEntry.isFile) {
      const fileEntry = this.files[0].fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {       
        this.myFile=file;
      });
    }
  }
  createrEvent()
  {
    console.log(this.myFile);
  }
  public deleteVideo():void{
    this.myFile=null;
    this.files=[];
  }
  public validateType():void{ //elimina los archivos que no son de tipo video o imagen

    if(this.myFile!==undefined)
    if(!this.myFile.type.includes("image"))
    {
        this.myFile=null;
        this.form.get('video').reset();
        this.deleteVideo();
    }
  }
}
