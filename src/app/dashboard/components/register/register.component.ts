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
        name:['',Validators.required],
        user:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',Validators.required]
      }
    );
  }
  register()
  {
    if(this.form.valid)
    {
      const value = this.form.value;
      let obuser:user = new user();
      obuser.name=value.name;
      obuser.email=value.email;
      obuser.user=value.user;
      obuser.password=value.password;
      this.userService.create(obuser)
      .subscribe() 
      {
        this.successRegister=true;
        setTimeout(()=>this.router.navigate(['/login']),1500);      
       
      }
    }
  }
  
}
