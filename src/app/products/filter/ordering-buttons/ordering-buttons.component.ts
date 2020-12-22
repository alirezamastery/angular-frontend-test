import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ordering-buttons',
  templateUrl: './ordering-buttons.component.html',
  styleUrls: ['./ordering-buttons.component.css']
})
export class OrderingButtonsComponent implements OnInit {

  buttons = [
    {
      id: 0,
      classname: "btn btn-primary",
      name: "date_desc",
      ordering: "ordering=-created_date",
      text: "جدیدترین"
    },
    {
      id: 1,
      classname: "btn btn-primary",
      name: "date_asc",
      ordering: "ordering=created_date",
      text: "قدیمی ترین"
    },
    {
      id: 2,
      classname: "btn btn-primary",
      name: "price_desc",
      ordering: "ordering=-price",
      text: "گران ترین"
    },
    {
      id: 3,
      classname: "btn btn-primary",
      name: "price_asc",
      ordering: "ordering=price",
      text: "ارزان ترین"
    }
  ]

  @Output() orderingEventClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(id: number) {
    this.orderingEventClicked.emit(this.buttons[id].ordering)
  }

}
