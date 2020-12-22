import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FilterBase } from '../filter-base';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  @Input() filters: FilterBase<any>[] = [];
  form!: FormGroup;
  payLoad = '';

  constructor() { }

  ngOnInit() {
    this.form = this.toFormGroup(this.filters);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }

  toFormGroup(filters: FilterBase<string>[]) {
    const group: any = {};

    filters.forEach(filter => {
      group[filter.key] = filter.required ? new FormControl(filter.value || '', Validators.required)
        : new FormControl(filter.value || '');
    });
    return new FormGroup(group);
  }

}
