import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../../models/Login.model';
import { user } from '../../../models/user.model';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;
  loginError:boolean=false;
  isText:boolean=false;
 public static loginEvent:boolean=false;
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
      obLogin.setUser(value.user);
      obLogin.setPassword(value.password);
      this.authService.loginUser(obLogin).subscribe(
        data=>{ 
           this.loginError=false;
           this.authService.setSession(data.token,obLogin.getUser());
           if(!LoginComponent.loginEvent)
           {
            this.router.navigate(['/home/videos']);
           }
           else{
            this.router.navigate(['/home/upload']);
           }
           
         
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
