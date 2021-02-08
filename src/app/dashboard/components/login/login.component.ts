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
  constructor(private formBuilder:FormBuilder,private authService:AuthService
    , private router:Router) {
    this.buildLogin();
   }

  ngOnInit() {
  }
  private buildLogin()
  {
    this.form=this.formBuilder.group({
      user:['',Validators.required],
      password:['',Validators.required]
    });
  }
  login()
  {
    if(this.form.valid)
    {
      var value = this.form.value;

      let obLogin:Login=new Login();
      obLogin.user = value.user;
      obLogin.password = value.password;

      this.authService.loginUser(obLogin).subscribe(
        data=>{ 
           this.authService.setSession(data);
            this.router.navigate(['/home/videos']);
         
        },
        error=>
        {
          this.loginError=true;
          console.log(error);
        }
        
      );

    }
  }

}
