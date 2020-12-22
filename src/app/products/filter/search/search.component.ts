import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // we use FormBuilder instead
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ProductService } from 'src/app/product.service';
import { FilterOptionsApiService } from 'src/app/services/filter-options-api.service';
import { FilterBase } from '../filter-base';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    filters$: Observable<any>;

    @Output() eventClicked = new EventEmitter<Event>();       //both do same thing with different approaches
    @Output() eventFilterSubmit = new EventEmitter<Event>();  //both do same thing with different approaches

    // name = new FormControl('');

    filterProductsForm = this.fb.group({
        nameFilter: ['', Validators.maxLength(50)],
    });

    constructor(
        private fb: FormBuilder,
        private productService: ProductService,
        private filterServiceApi: FilterOptionsApiService,
    ) {
        this.filters$ = this.filterServiceApi.getFilters();
    }

    ngOnInit(): void {
    }

    onClick(event: any): void {
        this.eventClicked.emit(event.value);
    }

    onSubmit() {
        this.eventFilterSubmit.emit(this.filterProductsForm.value)
        // this.productService.filterProducts(this.filterProductsForm.value)
    }

    // updateProfile() {
    //     this.filterProductsForm.patchValue({
    //         firstName: 'Nancy',
    //         address: {
    //             street: '123 Drew Street'
    //         }
    //     });
    // }

}
