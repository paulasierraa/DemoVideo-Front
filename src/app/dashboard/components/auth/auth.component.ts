import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router:Router) {
    // if(this.getUrl()==="/login")
    // {
    //   document.getElementById("pills-login-tab").focus();
    // }
    // else{
    //   document.getElementById("pills-register").focus();
    // }
   }

  ngOnInit() {
  }

  getUrl()
  {
    return this.router.url; 
  }

}
