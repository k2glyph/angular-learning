import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ProductService {
    private _productUrl = '/assets/product.json';

    constructor(private _http: HttpClient) {
    }
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleErrors)
        );
    }
    private handleErrors(err: HttpErrorResponse) {
        console.error(err.message);
        return throwError(err.message);
    }
}
