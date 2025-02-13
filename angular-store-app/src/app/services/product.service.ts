import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>('http://localhost:3000/products');
  }

  getProductById(id: number) {
    return this.http.get<any>(`http://localhost:3000/products/${id}`);
  }
}
