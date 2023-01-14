import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { ProdutsComponent } from './produts/produts.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    PagesComponent,
    ProdutsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
