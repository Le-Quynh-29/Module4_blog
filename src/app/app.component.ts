import { Component } from '@angular/core';
// interface Alert {
//   type: string;
//   message: string;
// }

// const ALERTS: Alert[] = [{
//     type: 'success',
//     message: 'This is an success alert',
//   }, {
//     type: 'info',
//     message: 'This is an info alert',
//   }, {
//     type: 'warning',
//     message: 'This is a warning alert',
//   }, {
//     type: 'danger',
//     message: 'This is a danger alert',
//   }, {
//     type: 'primary',
//     message: 'This is a primary alert',
//   }, {
//     type: 'secondary',
//     message: 'This is a secondary alert',
//   }, {
//     type: 'light',
//     message: 'This is a light alert',
//   }, {
//     type: 'dark',
//     message: 'This is a dark alert',
//   }
// ];

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  //  alerts: Alert[];

  // constructor() {
  //   this.reset();
  // }

  // close(alert: Alert) {
  //   this.alerts.splice(this.alerts.indexOf(alert), 1);
  // }

  // reset() {
  //   this.alerts = Array.from(ALERTS);
  // }


  countries = COUNTRIES;
}

// export class NgbdTableBasic {

// }
