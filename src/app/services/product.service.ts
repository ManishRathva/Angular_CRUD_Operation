import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { newProduct, product } from '../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  newData  : newProduct[] = [];
  pUrls = 'https://dummyjson.com/products/';
  constructor(private http: HttpClient) { }
  getProduct(): Observable<product['products']> {
    return this.http.get<product['products']>(this.pUrls);
  }
  getProductById(productId: string) {
    return this.http.get<product>(`https://dummyjson.com/products/${productId}`)
  }

  addNewproduct(newProduct:newProduct) {
    this.newData.push(newProduct);
  }
  getData() {
  return this.newData;
  }
}

