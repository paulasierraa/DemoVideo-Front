import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventComponent } from './components/event/event.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';

@NgModule({
  declarations: [EventComponent, EventDetailComponent, EventCardComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
  ]
})
export class EventsModule { }
