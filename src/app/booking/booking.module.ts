import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { ROUTE_CONFIG_TOKEN } from '../services/routeConfigForAny.service';


@NgModule({
  declarations: [
    BookingComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule
  ],
  providers:[
    {
      provide: ROUTE_CONFIG_TOKEN,
      useValue: { title : 'Booking'}
    },
  ]
})
export class BookingModule { }
