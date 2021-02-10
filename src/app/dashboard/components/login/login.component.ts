import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../../models/Login.model';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;
  loginError:boolean=false;
  message: string;
  constructor(private formBuilder:FormBuilder,private authService:AuthService
    , private router:Router) {
    this.buildLogin();
   }

  ngOnInit() {
  }
  private buildLogin()
  {
    this.form=this.formBuilder.group({
      user:['',[Validators.required]],
      password:['',Validators.required]
    });
  }
  login()
  {
    var value = this.form.value;
    if(this.form.valid&&value.user.trim()!=""&&value.password.trim()!="")
    {
      let obLogin:Login=new Login();
      obLogin.user = value.user;
      obLogin.password = value.password;
      this.authService.loginUser(obLogin).subscribe(
        data=>{ 
           this.loginError=false;
           this.authService.setSession(data);
            this.router.navigate(['/home/videos']);
         
        },
        error=>
        {
          this.loginError=true;

          if(error.error.non_field_errors)
          {
            this.message=error.error.non_field_errors[0];
          }
         else{
           this.message="";
         }
        }
        
      );

    }
    else{
      this.message="Debe completar todos los campos";
      this.loginError=true;
     
    }
  }
  
}
