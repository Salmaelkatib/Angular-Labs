import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`);
  }
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/${id}`);
  }
}
