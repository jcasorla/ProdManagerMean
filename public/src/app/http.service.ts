import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
	  this.getProducts();
    
}
getProducts() {
  return this._http.get('/api/products/');
}
getProduct(id) {
  return this._http.get('/api/products/' + id);
}

addProduct(data){
  console.log("I am in add products: ", data);
  return this._http.post('/api/products', data)
}

updateProduct(data) {
  return this._http.put('/api/products/' + data._id, data);
}
deleteProduct(id) {
  return this._http.delete('/api/products/' + id);
}



}



