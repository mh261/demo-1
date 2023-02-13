import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {Demo1Component} from '../../components/demo1/demo1.component'

@NgModule({
  declarations: [
    HomeComponent,
    Demo1Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
