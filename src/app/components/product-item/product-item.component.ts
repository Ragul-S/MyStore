import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product = new Product();
  quantity : number = 1;

  constructor(private cart: CartService, private products : ProductService) { }

  ngOnInit(): void {
  }
  
  addToCart(): void {
    this.cart.add(this.product, this.quantity);
  }

}
