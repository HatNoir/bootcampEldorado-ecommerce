import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  constructor(
    public CartService: CartService,
    private matSnackBar: MatSnackBar
  ){

  }

  @Input() bitPromocao: boolean = false;
  @Input() produto!: Product;
  
  addItem(product: Product){
    this.CartService.addToCart(product)

    this.matSnackBar.open(`${product.nome} foi adicionado ao seu carrinho`, '', { duration: 1500, verticalPosition: 'top' })

  }

}
