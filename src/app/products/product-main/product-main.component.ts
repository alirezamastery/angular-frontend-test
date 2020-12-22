import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.css']
})
export class ProductMainComponent implements OnInit {
  public clickedFilterEvent!: Event;
  public clickedOrderingEvent!: string;
  public clickedFilterSubmit!: Object;

  constructor() { }

  ngOnInit(): void {
  }

  childEventClicked(event: Event) {
    this.clickedFilterEvent = event;
  }

  childFilterSubmit(event: Event) {
    console.log("childFilterSubmit", event)
    this.clickedFilterSubmit = event;
  }

  childOrderingEventClicked(event: string) {
    this.clickedOrderingEvent = event;
  }

}
