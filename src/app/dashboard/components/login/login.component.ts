import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../../models/Login.model';
import { Session } from '../../../models/Session.model';
import { user } from '../../../models/user.model';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!:FormGroup;

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

      var obUser:user;
      obUser.user = value.user;
      obUser.password = value.password;
      var obLogin:Login;
      obLogin.obUser= obUser;

      this.authService.loginUser(obLogin).subscribe(
        data=> this.correctLogin(data),
        error=>console.log(error)
      );

    }
  }
  private correctLogin(data: Login){
    this.authService.setSession(data);
    console.log(data);
    this.router.navigate(['/home/videos']);
  }
}
