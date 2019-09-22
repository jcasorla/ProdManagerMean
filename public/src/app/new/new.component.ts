import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newproduct: any = {};
  errors:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("enter? "+ this.newproduct.title);
    
    this._httpService.addProduct(this.newproduct).subscribe({
      next: (data)=>{
      
      console.log("I am in add: ", data);
      this._router.navigate(['/list'])


    },
      error: error => {
        console.log(error);
        this.errors=error.error;

    }
    });
  }

}
