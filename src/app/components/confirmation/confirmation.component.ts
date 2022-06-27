import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Input() order = new Order(); 

  constructor(private cart: CartService, private router: Router) { }

  ngOnInit(): void {
    this.order = this.cart.getOrder();
  }

}
