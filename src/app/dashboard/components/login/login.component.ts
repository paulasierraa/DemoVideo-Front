import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { Login } from '../../../models/Login.model';
import { Session } from '../../../models/Session.model';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';

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
      var ob = new Login(value.user,value.password);
      this.authService.loginUser(ob).subscribe(
        
        data=> this.correctLogin(data),
        error=>console.log(error)
      );

    }
  }
  private correctLogin(data: Session){
    this.authService.setSession(data);
    this.router.navigate(['/home/videos']);
    console.log(data);
  }
}
