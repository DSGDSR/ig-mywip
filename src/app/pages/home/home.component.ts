import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cars: Car[];

  constructor() {
    this.cars = [
      {
        model: 'Mercedes Benz',
        make: 'C220',
        vrm: '6766KFC',
        pickupDate: null,
        incidentDate: new Date('22-01-2019')
      }, {
        model: 'Audi',
        make: 'Q3',
        vrm: '2345GFD',
        pickupDate: null,
        incidentDate: new Date('22-01-2019')
      }, {
        model: 'Mercedes Benz',
        make: 'C220',
        vrm: '6766KFC',
        pickupDate: null,
        incidentDate: new Date('22-01-2019')
      }, {
        model: 'Mercedes Benz',
        make: 'C220',
        vrm: '6766KFC',
        pickupDate: null,
        incidentDate: new Date('22-01-2019')
      }
    ]
  }

  ngOnInit() {
  }

}
