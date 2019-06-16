import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  foodProduct = new FormGroup({
    name : new FormControl(),
    quantity : new FormControl(),
    price : new FormControl(),
    color : new FormControl(),
    manufactureDate : new FormControl(),
    expiryDate : new FormControl(),
    manufacturerId: new FormControl(),  
    bestBefore : new FormControl()

});

  onClickSubmit(foodProduct: FormArray){
    var newProduct ={
      "name":foodProduct.value.name,
      "quantity":foodProduct.value.quantity,
      "price": foodProduct.value.price,
      "color":foodProduct.value.color,
      "manufactureDate":foodProduct.value.manufactureDate,
      "expiryDate":foodProduct.value.expiryDate,
      "manufacturerId":foodProduct.value.manufacturerId,
      "bestBefore":foodProduct.value.bestBefore
    }

    console.log(newProduct);
  }

}
