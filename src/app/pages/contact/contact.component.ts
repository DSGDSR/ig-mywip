import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public typeAnswer = 0;

  constructor() { }

  ngOnInit() {
  }

  changeTypeAnswer(selected) {
    this.typeAnswer = selected;
  }
}
