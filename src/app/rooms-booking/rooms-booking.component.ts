import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'pbhinv-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css'],
})
export class RoomsBookingComponent implements OnInit {

  id$: any = Observable<number>;
  
  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id$ = this.router.paramMap.pipe(
      map(param => param.get('id'))
    );

    // this.id$ = this.router.params.pipe(
    //   map(param => param['id'])
    // );
    
    //this.router.params.subscribe((params) => console.log(params));
  }
}