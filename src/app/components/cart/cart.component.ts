import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products : Product[] = []
  total: number = 0;
  name: string = "";
  address: string = "";
  creditcard: string = "";
  order=new Order();
  constructor(private cart: CartService,private router: Router) { }

  ngOnInit(): void {
    this.products = this.cart.products;
    this.total = this.cart.getTotal();
  }

  submitForm(): void{
    this.order.fullname = this.name;
    this.order.address = this.address;
    this.order.creditCard = this.creditcard;
    this.order.products = this.products;
    this.order.total = this.total;

    this.cart.confirmOrder(this.order);
    this.router.navigateByUrl("/confirm");
  }

  updateTotal(total: number){
    this.total = total;
  }

}
