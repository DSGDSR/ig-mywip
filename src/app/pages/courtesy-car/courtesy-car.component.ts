import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courtesy-car',
  templateUrl: './courtesy-car.component.html',
  styleUrls: ['./courtesy-car.component.css']
})
export class CourtesyCarComponent implements OnInit {
  public categoryLevel = 0;

  constructor() { }

  ngOnInit() {
  }

  changeSelectCaegory(selected) {
    this.categoryLevel = selected;
  }
}
