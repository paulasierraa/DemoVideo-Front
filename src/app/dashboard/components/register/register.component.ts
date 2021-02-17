import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators,FormsModule} from '@angular/forms';
// import * as CryptoJS from 'crypto-js';
import {UserService} from 'src/app/services/user/user.service';
import { user } from '../../../models/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
  form:FormGroup;
  successRegister:boolean=false;
  message:string;
  registerError:boolean=false;
  isText:boolean=false;
    constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router) {
    this.buildRegister();
   }

  ngOnInit() {
  }
  // encrypt(password:string):string
  // {
  //   // const val = this.form.value;
  //   return CryptoJS.SHA256(password.trim()).toString();
  // }
  buildRegister()
  {
    this.form = this.formBuilder.group(
      {
        id:['',[Validators.required]],
        name:['',[Validators.required,Validators.pattern('[a-zA-Z *]+')]],
        user:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required],
        country:['',Validators.required],
        city:['',Validators.required],
        gender:['',Validators.required]
      }
    );
  }
  register()
  {
    const value = this.form.value;
    if(this.form.valid&&value.name.trim()!=""&&value.user.trim()!="")
    { 
      let obuser:user = new user();
      obuser.setId(value.id);
      obuser.setName(value.name);
      obuser.setEmail(value.email);
      obuser.setUser(value.user);
      obuser.setGender(value.gender);
      obuser.setPassword(value.password);
      console.log(obuser);
      // this.userService.create(obuser)
      // .subscribe() 
      // {
      //   this.successRegister=true; 
      //   setTimeout(()=>this.router.navigate(['/login']),1500);      
      // }
    }
    else{
      this.message="Debe completar todos los campos";
      this.registerError=true;
    }
  }
  showPassword()
  {
    let passwordInput :any = document.getElementById('passwordtxt');
    if(!this.isText)
    {
      passwordInput.type = "text";
      this.isText=true;
    }
    else{
      passwordInput.type="password";
      this.isText=false;
    }
  }
}
