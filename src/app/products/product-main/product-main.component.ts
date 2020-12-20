import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {
  public clickedEvent!: Event;

  constructor() { }

  ngOnInit(): void {
  }

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }

}
