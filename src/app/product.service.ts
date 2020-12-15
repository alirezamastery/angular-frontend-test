import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = 'http://127.0.0.1:8000/api/products'

  constructor(
    private http: HttpClient,
  ) { }

  getProducts(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }

  getProduct(slug: string): Observable<any> {
    const url = `${this.baseUrl}/${slug}`
    return this.http.get<any>(url)
  }
}
