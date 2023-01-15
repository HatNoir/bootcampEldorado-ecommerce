import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {

  constructor(
    private cartService: CartService,
    private matSnackBar: MatSnackBar
  ){
    
  }

  @Input() item: any;

  removeItem(){
    this.cartService.removeProduct(this.item)
    this.matSnackBar.open(`${this.item.nome} foi removido do carrinho`, '',  {duration: 1500, verticalPosition: 'top'})

  }

}
