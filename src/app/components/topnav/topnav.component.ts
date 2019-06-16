import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
  

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    var input = document.getElementById("productId");
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("submitButton").click();
  }
    });
}

product = new FormGroup({
  productId : new FormControl(),
 
});

navigate(product:FormArray){
  this.router.navigate(["producthistory", product.value.productId]);
}

}                 
