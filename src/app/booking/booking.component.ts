import { Component, OnInit } from '@angular/core';
import { ConfigForAnyService } from '../services/config-for-any.service';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'pbhinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  constructor(
    private configForAnyService: ConfigForAnyService,
    private fb: FormBuilder
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

    this.bookingForm.reset();
    this.initRoom();
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
      guestName: ['', { updateOn: 'blur', validators: [Validators.required, Validators.minLength(5)] }],
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
    // {
    //   updateOn: 'blur'
    // }
    );
  }

  getBookingData() {
    //this.bookingForm.patchValue({
    this.bookingForm.setValue({
      id: 1,
      roomId: '2',
      checkInDate: new Date('22-Aug-2012'),
      checkOutDate: new Date('11-Aug-2020'),
      bookingStatus: 'Booked',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: 'Rummy Singh',
      guestEmail: 'rummy@boss.com',
      address: {
        addressLine1: 'Line 1 Adrress',
        addressLine2: '',
        city: 'Jagraon',
        state: 'Punjab',
        country: 'India',
        zipCode: ''
      },
      guests: [
        { guestName: '', age: '' },
        { guestName: '', age: '' }
      ],
      tnc: false
    });
  }

  ngOnInit(): void {
    this.initRoom();
    this.getBookingData();

    this.bookingForm.valueChanges.subscribe((data) => {
      console.log('this.bookingForm.valueChanges.subscribe:', data);
    });
  }
}
