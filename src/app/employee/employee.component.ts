import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'pbhinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [RoomsService]
})
export class EmployeeComponent {

  constructor(
    @Self()
    private roomsService: RoomsService)
    {

    }

  emplyeeName: string = 'The Employee Name';
}
