import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'pbhinv-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterContentInit {

  @ContentChild(EmployeeComponent) 
  employee!: EmployeeComponent;

  ngAfterContentInit(): void {
    this.employee.emplyeeName = 'Ramandeep Singh Bhamra';
  }
}