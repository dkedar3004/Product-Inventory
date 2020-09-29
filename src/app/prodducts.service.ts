import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
  })
export class ProductService {
constructor(public http: HttpClient)
{

}
// tslint:disable-next-line: ban-types
getData(products: any)
{
    this.http.get('http://localhost:3000/products').subscribe(x=>{
    // tslint:disable-next-line: forin
    for (const key in x)
    {
        products.push(x[key]);
    }
    });
}
}
