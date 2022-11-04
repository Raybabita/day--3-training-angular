import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CustomerComponent } from './CustomerApp.CustomerComponent';
import { CustomerRouting } from '../Routing/CustomerApp.CustomerRouting';

@NgModule({
  declarations: [
    CustomerComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(CustomerRouting),
  ],
  providers: [],
  bootstrap: [CustomerComponent]
})
export class CustomerModule { }
