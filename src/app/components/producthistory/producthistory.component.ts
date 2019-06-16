import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-producthistory',
  templateUrl: './producthistory.component.html',
  styleUrls: ['./producthistory.component.css']
})
export class ProducthistoryComponent implements OnInit {
  productId:string;
  constructor( private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.productId = params.id;
      this.getHistoryOfProduct(this.productId);   
    });
  }

  getHistoryOfProduct(productId:any) {
    console.log(productId);
  }
 

}
