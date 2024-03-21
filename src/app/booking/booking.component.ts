import { Component } from '@angular/core';
import { ConfigForAnyService } from '../services/config-for-any.service';

@Component({
  selector: 'pbhinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
constructor(
  private configForAnyService: ConfigForAnyService
){

}
}
