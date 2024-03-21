import { Component } from '@angular/core';
import { ConfigForAnyService } from '../services/config-for-any.service';

@Component({
  selector: 'pbhinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private configForAnyService: ConfigForAnyService) {

  }

  title: string = 'Ki Khap Aa';
}
