import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
    private matSnackBar: MatSnackBar,
    private router: Router
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

  getDiscount(){
    this.CarService
      .getDiscount(this.discountCupom.nativeElement.value.toLocaleUpperCase())
      .subscribe(
        (success: any) => {
          if (success.length){
            this.CarService.setDiscount(success[0])
            this.matSnackBar.open(`Desconto de ${success[0].discount}% foi aplicado!`, '', {duration: 2000, verticalPosition: 'top'})
          } else {
            this.matSnackBar.open(`Nenhum cupom encontrado.`, '', {duration: 2000, verticalPosition: 'top'})
          }
        }
      )
  }

  getTotal(){
    return this.CarService.getTotal()
  }

  clearCart(){
    this.matSnackBar.open('Pedido feito com sucesso', '', {duration: 2000, verticalPosition: 'top'})
    this.CarService.removeAllCart()

    this.router.navigateByUrl('pages/produtos')
  }

  ngOnDestroy(){

  }

}
