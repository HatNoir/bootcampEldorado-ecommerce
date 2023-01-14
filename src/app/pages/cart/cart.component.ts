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
  ){

  }

  cartList: Product[] = []

  ngOnInit(){
    this.CarService.getCart()
      .subscribe( response => {
        this.cartList = response
      })
  }

  ngOnDestroy(){

  }

}
