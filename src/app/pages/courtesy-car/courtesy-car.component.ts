import { Component, OnInit } from '@angular/core';
import { Courtesy } from 'src/app/models/courtesy.interface';

@Component({
  selector: 'app-courtesy-car',
  templateUrl: './courtesy-car.component.html',
  styleUrls: ['./courtesy-car.component.css']
})
export class CourtesyCarComponent implements OnInit {
  public categoryLevel = 0;

  public carAvilable: Courtesy [];
  public carAvailableLevel1: Courtesy [];
  public carAvailableLevel2: Courtesy [];
  public carAvailableLevel3: Courtesy [];

  constructor() { 
      this.carAvailableLevel1 = [
            {
              make: 'Audi',
              model: 'A4',
              year: '2018',
              numDoor: '4',
              colour: 'White'
            },
            {
              make: 'Mercedes',
              model: 'A Class',
              year: '2017',
              numDoor: '3',
              colour: 'Black'
            },
            {
              make: 'Audi',
              model: 'A8',
              year: '2019',
              numDoor: '4',
              colour: 'Pink'
            }
          ];
          
      this.carAvailableLevel2 = [
        {
          make: 'RENAULT',
          model: 'Megane',
          year: '2011',
          numDoor: '4',
          colour: 'Red'
        },
        {
          make: 'Citroen',
          model: 'Saxo',
          year: '2017',
          numDoor: '3',
          colour: 'Black'
        }
      ];

      this.carAvailableLevel3 = [
        {
          make: 'Dacia',
          model: 'Duster',
          year: '2010',
          numDoor: '4',
          colour: 'Green'
        },
        {
          make: 'Kia',
          model: 'Saxo',
          year: '2017',
          numDoor: '3',
          colour: 'Black'
        }
      ];
  }

  ngOnInit() {
  }

  changeSelectCaegory(selected) {
    switch (selected) {
      case "1": { this.carAvilable = this.carAvailableLevel1;break;}
      case "2": { this.carAvilable = this.carAvailableLevel2;break;}
      case "3": { this.carAvilable = this.carAvailableLevel3;break;}
      default: this.carAvilable=[];
      
    } 
  }
}
