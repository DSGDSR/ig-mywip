import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Opportunity, cars } from 'src/app/models/opportunity.interface';

@Component({
  selector: 'app-supplier-mgt',
  templateUrl: './supplier-mgt.component.html',
  styleUrls: ['./supplier-mgt.component.css']
})
export class SupplierMgtComponent implements OnInit {

  public id: String;
  public car: Opportunity;
  public car_proggress: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    cars.forEach((car) => {
      console.log(car.id == this.id)
      if (car.id == this.id) {
        console.log(car.proggress.trunk)
        this.car = car;
        this.car_proggress = (car.proggress.trunk+car.proggress.backw+car.proggress.tail+car.proggress.step)/4
      }
    });
  }

}
