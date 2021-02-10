import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../dashboard/components/login/login.component';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  participate()
  {
    LoginComponent.loginEvent=true;
  }
}
