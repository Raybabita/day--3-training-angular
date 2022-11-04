import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SupplierComponent } from './CustomerApp.SupplierComponent';
import { SupplierRouting } from '../Routing/CustomerApp.SupplierRouting';

@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SupplierRouting),

  ],
  providers: [],
  bootstrap: [SupplierComponent]
})
export class SupplierModule { }
