import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'; // we use FormBuilder instead
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { ProductService } from 'src/app/product.service';
import { FilterOptionsApiService } from 'src/app/services/filter-options-api.service';
import { FilterBase } from '../filter-base';
import { Options } from '@angular-slider/ngx-slider';
import { animation } from '@angular/animations';


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

    divActive: Boolean = false  //for dropdown div

    minValue: number = 50; //for slider
    maxValue: number = 200;
    options: Options = {
        floor: 0,
        ceil: 250,
        animate: false,
    };

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

    onActive() {
        this.divActive = !this.divActive;
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
