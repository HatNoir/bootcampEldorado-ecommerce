import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.scss']
})
export class ProdutsComponent {
  productList!: any[]

  constructor(
    private productsService: CartService
  ){}

  ngOnInit(){
    this.productsService
      .getProducts()
      .subscribe( (response: any) => {
        this.productList = [...response]
      })
  }

}
