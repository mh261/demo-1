import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from 'src/app/components/demo1/demo1.component';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
