import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../appConfig/appConfig.service';
import { AppConfig } from 'src/app/appConfig/appConfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(
    @Inject(APP_SERVICE_CONFIG)
    private confg: AppConfig,

    private http: HttpClient
  ) {
    console.log(this.confg.apiEndpoint);
  }

  headers = new HttpHeaders({ 'tokenRoomsService': 'tokenRoomsServicemyEnCrYpTeDToKeN1@3$' }); 

  // RXjs shareReplay Operator
  getRooms$ = this.http.get<RoomList[]>('api/rooms', { headers: this.headers }).pipe(shareReplay(1));

  getRooms() {
    return this.http.get<RoomList[]>('api/rooms');
  }

  addRoom(room: RoomList) {
    return this.http.post('api/rooms', room);
  }

  getPhotos() {
    const request = new HttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress: true
      });

    return this.http.request(request);
  }

  // getRooms(): RoomList[] {
  //   return [
  //     {
  //       roomNumber: 1,
  //       roomType: "Deluxe Room",
  //       amenities: "Air Condition etc",
  //       price: 500,
  //       photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
  //       checkinTime: new Date('11-Nov-2020'),
  //       checkoutTime: new Date('11-Nov-2020'),
  //       rating: 0.5
  //     },
  //     {
  //       roomNumber: 2,
  //       roomType: "Deluxe Room",
  //       amenities: "Air Condition etc",
  //       price: 500,
  //       photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
  //       checkinTime: new Date('11-Nov-2020'),
  //       checkoutTime: new Date('11-Nov-2020'),
  //       rating: 1.5
  //     },
  //     {
  //       roomNumber: 3,
  //       roomType: "Deluxe Room",
  //       amenities: "Air Condition etc",
  //       price: 5000,
  //       photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
  //       checkinTime: new Date('11-Nov-2020'),
  //       checkoutTime: new Date('11-Nov-2020'),
  //       rating: 2.56
  //     },
  //     {
  //       roomNumber: 4,
  //       roomType: "Deluxe Room",
  //       amenities: "Air Condition etc",
  //       price: 1500,
  //       photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
  //       checkinTime: new Date('11-Nov-2020'),
  //       checkoutTime: new Date('11-Nov-2020'),
  //       rating: 3.4
  //     },
  //     {
  //       roomNumber: 5,
  //       roomType: "Deluxe Room",
  //       amenities: "Air Condition etc",
  //       price: 2500,
  //       photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
  //       checkinTime: new Date('11-Nov-2020'),
  //       checkoutTime: new Date('11-Nov-2020'),
  //       rating: 4.8
  //     }
  //   ];

  // }
}
