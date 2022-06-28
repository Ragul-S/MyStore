import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product = new Product();
  quantity : number = 1;

  constructor(private cart: CartService, private route: ActivatedRoute, private productService: ProductService) {
   
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = this.productService.getProductById(params['id']);
    });
  }

  addToCart(): void {
    this.cart.add(this.product, this.quantity);
  }


}
