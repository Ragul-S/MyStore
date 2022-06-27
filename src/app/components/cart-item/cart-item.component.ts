import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() total= new EventEmitter();
  cartTotal: number = 0;
  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }

  updateQuantity(): void{
    if(this.product.quantity<1){
      this.cart.removeProduct(this.product);
    }
    this.cartTotal = this.cart.getTotal();
  }

}
