import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private apiService: ProductService) { }

  ngOnInit(): void {
    this.apiService.getProducts()
      .subscribe((data) => {
        console.log("in ProductListComponent: ", data)
        this.products = data.results
      })
  }

}
