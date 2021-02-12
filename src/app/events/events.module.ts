import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventComponent } from './components/event/event.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';

@NgModule({
  declarations: [EventComponent, EventDetailComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
  ]
})
export class EventsModule { }
