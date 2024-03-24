import { Component } from '@angular/core';

@Component({
  selector: 'pbhinv-learing-bootstrap',
  templateUrl: './learing-bootstrap.component.html',
  styleUrls: ['./learing-bootstrap.component.css']
})
export class LearingBootstrapComponent {
  // myNumber: number = 12345.9876;
  myNumber: number = 1000.9876;
  dateObj = Date.now();//new Date('28-May-1957');

  aestTime = new Date().toLocaleString("en-US", {
    timeZone: "Australia/Brisbane"
  });

  asiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" });

  usaTime = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York"
  });

  // indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

  indiaTime = new Date("2024-02-22T23:45:44.3164016Z").toLocaleString("en-US", { timeZone: "Asia/Kolkata" });

  constructor() {
    console.log("India time: " + new Date(this.indiaTime).toISOString());
    console.log("USA time: " + new Date(this.usaTime).toISOString());
    console.log("Asia time: " + new Date(this.asiaTime).toISOString());
    console.log("AEST time: " + new Date(this.aestTime).toISOString());
  }
}
