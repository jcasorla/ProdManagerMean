import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: []
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log('Authors:', data);
      this.products = data['products'];
    });
  }

  onClickDelete(id) {
    const observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      this.getAllProducts();
      console.log(data);
    });
  }

}
