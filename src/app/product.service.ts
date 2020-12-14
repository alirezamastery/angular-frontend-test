import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://127.0.0.1:8000/api/products/'

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<Products[]> {
    return this.http.get(this.baseUrl)
  }
}
