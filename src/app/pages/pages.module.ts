import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PagesComponent } from './pages.component';
import { ProdutsComponent } from './produts/produts.component';
import { CartComponent } from './cart/cart.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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
    MatSnackBarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PagesModule { }
