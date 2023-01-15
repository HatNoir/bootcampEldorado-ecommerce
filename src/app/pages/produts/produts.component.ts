import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  templateUrl: './produts.component.html',
  styleUrls: ['./produts.component.scss']
})
export class ProdutsComponent {

  constructor(
    private productsService: CartService
  ){}

  isLoadingResults: boolean = true;
  productList!: any[]

  ngOnInit(){
    this.productsService
      .getProducts()
      .subscribe( (response: any) => {
        setTimeout(() => { this.isLoadingResults = false }, 500)
        this.productList = [...response]
      })
  }

}
