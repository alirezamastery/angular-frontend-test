import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { FilterBase } from '../products/filter/filter-base'
@Injectable({
  providedIn: 'root'
})
export class FilterOptionsApiService {

  constructor() { }

  // TODO: get from a remote source of question metadata
  getFilters() {

    const filters: FilterBase<string>[] = [

      new FilterBase({
        controlType: 'dropdown',  // <-- main argument "controlType"
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new FilterBase({
        controlType: 'textbox',
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new FilterBase({
        controlType: 'textbox',
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      }),

      new FilterBase({
        controlType: 'textbox',
        key: 'shippingAddress',
        label: 'address',
        type: 'text',
        order: 4
      })
    ];

    return of(filters.sort((a, b) => a.order - b.order));
  }
}
