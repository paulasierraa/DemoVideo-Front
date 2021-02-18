import { Component, OnInit ,HostListener} from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(private router:Router) { }
  scrHeight:any;
  scrWidth:any;
  principalWindow:boolean;
  ngOnInit(): void {
    
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
}
