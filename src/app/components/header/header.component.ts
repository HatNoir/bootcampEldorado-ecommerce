import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private route: ActivatedRoute,
    private CartService: CartService
  ) {}

  ngOnInit(){
  }

  amount(){
    return this.CartService.getAmout() || 0
  }
}
