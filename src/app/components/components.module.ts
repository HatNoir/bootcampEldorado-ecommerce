import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';

import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';

@NgModule({
  declarations: [
    ItemCardComponent,
    NavBarComponent,
    HeaderComponent,
    ProductCardComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule
  ],
  exports: [
    ItemCardComponent,
    HeaderComponent,
    NavBarComponent,
    ProductCardComponent,
  ]
})
export class ComponentsModule { }
