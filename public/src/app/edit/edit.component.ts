import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editProduct: any = {};
  errors:any;

  constructor(
    private _httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router
    ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log(params['id'])
      let id=params['id'];
      this.findproduct(id)
  });
  }

  findproduct(id) {
    const observable = this._httpService.getProduct(id);
    observable.subscribe(data => {
      console.log(data['product']);
      this.editProduct = data['product'];
    });
  }

  onSubmit() {
    
    this._httpService.updateProduct(this.editProduct).subscribe({
      next: (data)=>{
        this._router.navigate(['/list'])
      
      },
        error: error => {
          console.log(error);
          this.errors=error.error;
  
      }
      
    });
  }

}
