import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  constructor(
    private CarService: CartService,
    private matSnackBar: MatSnackBar
  ){
    
  }

  cartList: Product[] = []

  ngOnInit(){
    this.CarService.getCart()
      .subscribe( response => {
        this.cartList = response
      })
  }

  removeItem(product: Product){
    this.CarService.removeProduct(product)
    this.matSnackBar.open(`${product.nome} foi removido da lista`, 'Fechar',  {duration: 1500, verticalPosition: 'top'})
  }

  ngOnDestroy(){

  }

}
