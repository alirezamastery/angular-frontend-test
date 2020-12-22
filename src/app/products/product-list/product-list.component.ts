import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/product.service';
import { SharedDataService } from "src/app/services/shared-data.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() filterEvent!: Event;
  @Input() orderingEvent!: string;
  @Input() filterSubmitEvent!: Object;

  products: any;
  saerchData: Object = {};


  private subscription!: Subscription;

  constructor(
    private productService: ProductService,
    private sharedData: SharedDataService,
  ) { }

  ngOnInit(): void {
    // this.sharedData.currentMessage.subscribe(message => this.saerchData = message)
    this.subscription = this.productService.getProducts()
      .subscribe((data) => {
        console.log("in ProductListComponent: ", data)
        this.products = data.results
      })
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("ProductListComponent | ngOnChanges | changes: ", changes)
    for (const change in changes) {
      if (Object.prototype.hasOwnProperty.call(changes, change)) {
        const element = changes[change];
        if (!element.firstChange) {
          console.log("============", element.currentValue)
        }
      }
    }

    if (changes.filterEvent && !changes.filterEvent.firstChange) {
      const search: string = changes.filterEvent.currentValue
      const searchObjNew = { search }

      this.subscription.unsubscribe()
      this.subscription = this.productService.filterProducts(searchObjNew)
        .subscribe((data) => {
          this.products = data.results
        })
    }
  }

  onDestroy() {
    this.subscription.unsubscribe()
  }

}

