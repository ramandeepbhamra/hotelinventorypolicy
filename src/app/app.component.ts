import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LOCAL_STORAGE_TOKEN } from './localstorage.token';
import { InitService } from './init.service';

@Component({
  selector: 'pbhinv-root',
  templateUrl: './app.component.html',
  //template: '<h1>Hola!</h1>',
  // template: `<h1>Hola!</h1>
  // Tig Tong
  // Yeah`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  constructor(
    @Optional()
    private loggerService: LoggerService,

    @Inject(LOCAL_STORAGE_TOKEN)
    private localStorage: Storage,

    private initService: InitService
  ) {
    console.log('The initService configuration: ', initService.config);
  }

  title = 'hotelinventorypolicy';
  role = "Users";

  // @ViewChild('name', { static: true })
  // name!: ElementRef;

  // @ViewChild('room', { read: ViewContainerRef })
  // vcr!: ViewContainerRef;

  ngAfterViewInit(): void {
    // console.log(this.name.nativeElement.innerText = 'This is the name...');

    // const roomsComponentRef = this.vcr.createComponent(RoomsComponent);
    // roomsComponentRef.instance.numberOfRooms = 500;
  }

  ngOnInit(): void {
    this.loggerService?.log('Aa gaya ni ohi billo time...');

    this.localStorage.setItem('hotelName', 'Hilton Hotel');
  }
}
