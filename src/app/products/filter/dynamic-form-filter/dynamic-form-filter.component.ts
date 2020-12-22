import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FilterBase } from '../filter-base';

@Component({
  selector: 'app-dynamic-form-filter',
  templateUrl: './dynamic-form-filter.component.html',
  styleUrls: ['./dynamic-form-filter.component.css']
})
export class DynamicFormFilterComponent implements OnInit {
  @Input() filter!: FilterBase<string>;
  @Input() form!: FormGroup;

  get isValid() { return this.form.controls[this.filter.key].valid; }

  constructor() { }

  ngOnInit(): void {
  }

}
