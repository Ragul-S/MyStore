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
    this.getProduct().subscribe(res => {
      this.products = res;
      console.log(this.products);
    })
   }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('assets/data.json');
  }

  getProductById(id: number): Product {

    const productFound : Product | undefined = this.products.find(p => p.id == id);
    console.log(`Found : ${productFound}`);
    console.log(id);
    if(productFound){
      return productFound;
    }
    else return new Product();
}

}
