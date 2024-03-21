import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, catchError, map, of } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { ConfigForAnyService } from '../services/config-for-any.service';

@Component({
  selector: 'pbhinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  constructor(
    private roomsService: RoomsService,
    private configForAny: ConfigForAnyService
    ) {
    this.roomsService.getRooms
  }

  hotelName: string = "Hilton Hotel";
  numberOfRooms: number = 10;
  hideRooms: boolean = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  error$ = new Subject<string>();

  getError$ = this.error$.asObservable();

  // RxJs catchError Operator
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err) => {
      console.log(err)
      this.error$.next(err.message);
      return of([]);
    })
  );

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  );
  
  stream = new Observable(observer => {
    observer.next('User 1');
    observer.next('User 2');
    observer.next('User 3');
    observer.next('User 4');
    observer.next('User 5');
    observer.complete();
    //observer.error('error');
  });

  roomList: RoomList[] = [];
  selectedRoom!: RoomList;

  totalPhotosBytesLoaded: number = 0;

  //@ViewChild(HeaderComponent, { static: true })
  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  toggle(): void {
    this.hideRooms = !this.hideRooms;
  }

  addRoom(): void {
    const room: RoomList =
    {
      roomNumber: 6,
      roomType: "Deluxe Room",
      amenities: "Air Condition etc",
      price: 600,
      photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
      checkinTime: new Date('11-Nov-2020'),
      checkoutTime: new Date('11-Nov-2020'),
      rating: 0.5
    }

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];

    this.roomsService.addRoom(room).subscribe(data => {
      this.roomList = [...this.roomList, room];
    });
  }

  ngOnInit(): void {
    // this.stream.subscribe((data) => console.log(data));
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('Stream Complate'),
      error: (err) => console.log(err)
    });

    // console.log(this.roomsService.getPhotos()
    //   .subscribe((data) => console.log(data)));

    console.log(this.roomsService.getPhotos()
      .subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent:
            {
              console.log('Request has been made');
              break;
            }
          case HttpEventType.ResponseHeader:
            {
              console.log('Request sucess!');
              break;
            }
          case HttpEventType.DownloadProgress:
            {
              this.totalPhotosBytesLoaded += event.loaded;
              break;
            }
          case HttpEventType.Response:
            {
              console.log(event.body);
              break;
            }
        }
      }
      ));

    // console.log(this.headerComponent);
    this.initRoomsList();
  }

  ngDoCheck(): void {
    console.log("Do Check Triggered");
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';
    console.log(this.headerComponent);

    this.headerChildrenComponent.last.title = 'The Last Header...';
    console.log(this.headerChildrenComponent);
  }

  ngAfterViewChecked(): void {
    //this.headerComponent.title = 'Rooms View 1';
  }

  initRoomsList(): void {
    this.roomsService
      .getRooms$
      .subscribe(rooms => { this.roomList = rooms; });

    // this.roomsService
    //   .getRooms()
    //   .subscribe(rooms => { this.roomList = rooms; });

    //this.roomList = this.roomsService.getRooms();

    // this.roomList = [
    //   {
    //     roomNumber: 1,
    //     roomType: "Deluxe Room",
    //     amenities: "Air Condition etc",
    //     price: 500,
    //     photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
    //     checkinTime: new Date('11-Nov-2020'),
    //     checkoutTime: new Date('11-Nov-2020'),
    //     rating: 0.5
    //   },
    //   {
    //     roomNumber: 2,
    //     roomType: "Deluxe Room",
    //     amenities: "Air Condition etc",
    //     price: 500,
    //     photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
    //     checkinTime: new Date('11-Nov-2020'),
    //     checkoutTime: new Date('11-Nov-2020'),
    //     rating: 1.5
    //   },
    //   {
    //     roomNumber: 3,
    //     roomType: "Deluxe Room",
    //     amenities: "Air Condition etc",
    //     price: 5000,
    //     photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
    //     checkinTime: new Date('11-Nov-2020'),
    //     checkoutTime: new Date('11-Nov-2020'),
    //     rating: 2.56
    //   },
    //   {
    //     roomNumber: 4,
    //     roomType: "Deluxe Room",
    //     amenities: "Air Condition etc",
    //     price: 1500,
    //     photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
    //     checkinTime: new Date('11-Nov-2020'),
    //     checkoutTime: new Date('11-Nov-2020'),
    //     rating: 3.4
    //   },
    //   {
    //     roomNumber: 5,
    //     roomType: "Deluxe Room",
    //     amenities: "Air Condition etc",
    //     price: 2500,
    //     photo: "https://evergreenlandscapes.ca/wp-content/uploads/2018/06/grass.jpg.webp",
    //     checkinTime: new Date('11-Nov-2020'),
    //     checkoutTime: new Date('11-Nov-2020'),
    //     rating: 4.8
    //   }
    // ];
  }
}
