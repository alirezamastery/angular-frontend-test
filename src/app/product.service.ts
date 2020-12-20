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

  filterProducts<T extends object, U extends keyof T>(searchObj: T): Observable<any> {
    let search = '';
    for (const keyword in searchObj) {
      if (Object.prototype.hasOwnProperty.call(searchObj, keyword)) {
        const filter = searchObj[keyword];
        console.log("filterProducts: ", filter)
        search += `&search=${filter}`
      }
      console.log("ProductService | filterProducts | search", search)
    }

    const url = `${this.baseUrl}/?${search}`
    return this.http.get<any>(url)
  }

}
