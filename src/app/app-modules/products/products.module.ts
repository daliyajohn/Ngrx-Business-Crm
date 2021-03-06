import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductsRoutingModule } from './products.routing';
import { ProductListComponent } from './containers/product-list/product-list.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    HttpModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
  ],
  providers: [ ],
  declarations: [
    ProductListComponent,
  ]
})

export class ProductsModule { }
