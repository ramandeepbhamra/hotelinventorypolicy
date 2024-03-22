import { Component, OnInit } from '@angular/core';
import { ConfigForAnyService } from '../services/config-for-any.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { BookingService } from './services/booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'pbhinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  roomId = this.activatedRoute.snapshot.paramMap.get('roomId');;
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private configForAnyService: ConfigForAnyService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  addBooking() {
    console.log(this.bookingForm.value);
    // Give you those values as well well which are disabled in the form
    console.log(this.bookingForm.getRawValue());

    // this.bookingForm.reset();
    // this.initRoom();

    // this.bookingService.bookRoom(
    //   this.bookingForm.getRawValue()).subscribe((data => {
    //     console.log(data);
    //   }));
  }

  addGuest() {
    this.guests.push(
      this.fb.group(this.addGuestControl())
    );
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

  addGuestControl() {
    return { guestName: ['', { validators: [Validators.required] }], age: new FormControl('') };
  }

  initRoom(): void {
    this.bookingForm = this.fb.group({
      id: [''],
      roomId: new FormControl({ value: '2', disabled: true }, { validators: [Validators.required] }),
      checkInDate: [''],
      checkOutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [''],
      guestName: ['',
        {
          updateOn: 'blur',
          validators: [
            Validators.required,
            Validators.minLength(5),
            CustomValidator.validateName,
            CustomValidator.validateSpecialChar('*')
          ]
        }],
      guestEmail: ['', { updateOn: 'blur', validators: [Validators.required] }],
      address: this.fb.group({
        addressLine1: ['', { validators: [Validators.required] }],
        addressLine2: '',
        city: ['', { validators: [Validators.required] }],
        state: ['', { validators: [Validators.required] }],
        country: '',
        zipCode: ''
      }),
      guests: this.fb.array([
        this.fb.group(this.addGuestControl()),
        this.fb.group(this.addGuestControl())
        // this.fb.group({ guestName: [''], age: new FormControl('') }),
        // this.fb.group({ guestName: [''], age: new FormControl('') })
      ]),
      tnc: new FormControl(false, { validators: [Validators.required] })
    },
      {
        updateOn: 'blur',
        validators: [CustomValidator.validateDate]
      }
    );
  }

  getBookingData() {
    //this.bookingForm.patchValue({
    this.bookingForm.setValue({
      id: '1',
      roomId: this.roomId,
      checkInDate: new Date('22-Aug-2012'),
      checkOutDate: new Date('11-Aug-2020'),
      bookingStatus: 'Booked',
      bookingAmount: '500',
      bookingDate: new Date('11-Aug-2020'),
      mobileNumber: '123456789',
      guestName: 'Rummy Singh',
      guestEmail: 'rummy@boss.com',
      address: {
        addressLine1: 'Line 1 Adrress',
        addressLine2: 'Line 1 Adrress',
        city: 'Jagraon',
        state: 'Punjab',
        country: 'India',
        zipCode: '1478520'
      },
      guests: [
        { guestName: 'Rummy', age: '40' },
        { guestName: 'Singh', age: '42' }
      ],
      tnc: false
    });
  }

  ngOnInit(): void {
    this.initRoom();
    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   console.log('this.bookingForm.valueChanges.subscribe:', data);
    // });

    // this.bookingForm.valueChanges.pipe(
    //   mergeMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data) => console.log(data));

    // this.bookingForm.valueChanges.pipe(
    //   switchMap((data) => this.bookingService.bookRoom(data))
    // ).subscribe((data) => console.log(data));

    this.bookingForm.valueChanges.pipe(
      exhaustMap((data) => this.bookingService.bookRoom(data))
    ).subscribe((data) => console.log(data));

  }
}
