import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemCardComponent {

  constructor(private cartService: CartService){
    
  }

  @Input() item: any;

  removeItem(){
    this.cartService.removeProduct(this.item)
  }

}
