import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PagesComponent } from './pages.component';
import { ProdutsComponent } from './produts/produts.component';

const routes: Routes = [
  { 
    path: '', 
    component: PagesComponent,
    children: [
      {
        path: 'produtos',
        component: ProdutsComponent,
        title: 'Produtos'
      },
      {
        path: 'carrinho',
        component: CartComponent,
        title: 'Carrinho'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
