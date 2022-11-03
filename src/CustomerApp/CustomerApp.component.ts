import { Component } from '@angular/core';
import { Customer } from './CustomerApp.model';
@Component({
  selector: 'app-root',
  templateUrl: './CustomerApp.view.html',
})
export class CustomerComponent {
  title = 'CustomerApp';
  CustomerModel: Customer = new Customer();
  CustomerModelArray: Array<Customer> = new Array<Customer>;
  Add() {
    this.CustomerModelArray.push(this.CustomerModel);
    this.CustomerModel = new Customer(); //clear UI
  }
}
