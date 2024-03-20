import { Component } from '@angular/core';
import { RoomList } from '../rooms/rooms';
import { RoomsService } from '../rooms/services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'pbhinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent {
  constructor(private roomService: RoomsService) {

  }

  roomAddedSucessfully: string = '';

  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photo: '',
    price: 0.00,
    rating: 0.00
  };

  addRoom(addRoomForm: NgForm) {
    this.roomService.addRoom(this.room).subscribe((data) => { this.roomAddedSucessfully = 'Room added sucessfully...' });

    // addRoomForm.reset();
    addRoomForm.resetForm(
      {
        roomType: '',
        amenities: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photo: '',
        price: 0.00,
        rating: 0.00
      }
    );
  }
}
