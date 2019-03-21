import { Component, OnInit } from '@angular/core';
import { Opportunity, cars } from 'src/app/models/opportunity.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cars: Opportunity[];

  constructor() {
    this.cars = cars;
  }

  ngOnInit() {
  }

}
