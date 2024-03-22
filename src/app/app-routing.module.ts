import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then((m => m.RoomsModule)),
    canActivate: [LoginGuard],
    canLoad: [LoginGuard]
  },
  {
    path: 'booking/:roomId',
    loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule),
    // canActivate: [LoginGuard]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
