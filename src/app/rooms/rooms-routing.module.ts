import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomsComponent } from './rooms.component';
import { RoomsAddComponent } from '../rooms-add/rooms-add.component';
import { RoomsBookingComponent } from '../rooms-booking/rooms-booking.component';
import { RoomsGuard } from './guards/rooms.guard';

const routes: Routes = [
  { path: 'add', component: RoomsAddComponent, canActivate: [RoomsGuard] },
  {
    path: '', 
    component: RoomsComponent,
    canActivateChild: [RoomsGuard],
    children: [
      { path: 'add-room', component: RoomsAddComponent },
      // { path: ':id', component: RoomsBookingComponent }
    ]
  },
  // { path: 'rooms/add', component: RoomsAddComponent },
  // { path: 'rooms/:id', component: RoomsBookingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
