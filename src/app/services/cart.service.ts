import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: Product[]= [];
  order: Order = new Order();

  constructor(private http: HttpClient) {  }

  add(product: Product, quantity: number){
    let productExist = this.products.find(res => res.id == product.id);
    if (productExist) {
      alert(`Already exists`);  
    } 
    else {
      product.quantity = quantity;
      this.products.push(product);
      alert(`Added to cart successfully!`);
    }
  }
  getTotal(): number {
    let sum = 0;
    this.products.forEach(product => sum += product.quantity * product.price);
    return sum;
  }
  removeProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
    alert("Item removed from Cart");
  }
  confirmOrder(order : Order){
    this.order = order;
    this.products = [];
  }
  getOrder(): Order{
    return this.order;
  }

}
