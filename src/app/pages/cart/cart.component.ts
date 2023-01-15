import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs/internal/observable/of';
import { switchMap } from 'rxjs/operators';
import { Total } from 'src/app/model/Cart';
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

  @ViewChild('discountCupom') discountCupom!: ElementRef<HTMLInputElement>;

  cartList: Product[] = []
  orderResume!: Total;

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

  getDiscount(){
    this.CarService
      .getDiscount(this.discountCupom.nativeElement.value)
      .subscribe(
        (success: any) => {
          if (success.length){
            this.CarService.setDiscount(success[0].discount)
          }
        }
      )
  }

  getTotal(){
    return this.CarService.getTotal()
  }

  ngOnDestroy(){

  }

}
