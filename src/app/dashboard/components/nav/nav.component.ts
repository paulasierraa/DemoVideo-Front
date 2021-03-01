import { Component, OnInit,HostListener } from '@angular/core';
import { Router, Event } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(private router:Router) { 

  }
  scrHeight:any;
  scrWidth:any;
  principalWindow:boolean;
  ngOnInit() {
    this.getUrl();
  }

  getUrl()
    {
      return this.router.url; 
    }

  @HostListener("window:scroll", ['$event'])
  doSomethingOnWindowsScroll($event){
    let scrollOffset = $event.srcElement.children[0].scrollTop;
    //console.log("window scroll: ", scrollOffset);
    if(scrollOffset>=700)
    {
      this.principalWindow=true;
    }
    else{
      this.principalWindow=false;
    }
  }
  detailEvent()
  {
    if(this.getUrl()==='/information')
    {
      let element:any =document.getElementById('dash');
      element.removeClass("dashboard");
    }
  }
  onClick()
  {
    if(LoginComponent.loginEvent===true)
    {
      LoginComponent.loginEvent=false;
    }
  }
}
