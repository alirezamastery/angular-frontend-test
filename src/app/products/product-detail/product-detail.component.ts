import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/product.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.apiService.getProduct(slug).subscribe(data => {
      console.log("in ProductDetailComponent | data:", data)
      this.product = data
    })
  }


}
