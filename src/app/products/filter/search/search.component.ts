import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // we use FormBuilder instead
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ProductService } from 'src/app/product.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    @Output() eventClicked = new EventEmitter<Event>();

    // name = new FormControl('');

    // filterProductsForm = this.fb.group({
    //     nameFilter: ['', Validators.maxLength(50)],
    // });

    constructor(
        private fb: FormBuilder,
        private productService: ProductService
    ) { }

    ngOnInit(): void {
    }

    onClick(event: any): void {
        this.eventClicked.emit(event.value);
    }

    // onSubmit() {
    //     // TODO: Use EventEmitter with form value
    //     console.log(this.filterProductsForm.value);
    //     this.productService.filterProducts(this.filterProductsForm.value)
    // }

    // updateProfile() {
    //     this.filterProductsForm.patchValue({
    //         firstName: 'Nancy',
    //         address: {
    //             street: '123 Drew Street'
    //         }
    //     });
    // }

}
