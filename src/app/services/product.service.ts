import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [];
  productFound = new Product();

  constructor(private http: HttpClient) {
   }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('assets/data.json');
  }

  getProductById(id: number): Product {
    this.getProduct().subscribe(res => {
      this.products = res;
    })
    const productFound : Product | undefined = this.products.find(p => p.id == id);
    if(productFound){
      return productFound;
    }
    else return new Product();
}

}
