import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-viewproducts',
  templateUrl: './viewproducts.component.html',
  styleUrls: ['./viewproducts.component.css']
})
export class ViewproductsComponent implements OnInit {

  constructor(private  dialog:  MatDialog) { }

  ngOnInit() {
  }
  

  openModal(event) {
    var productId = event.target.attributes.id.nodeValue;
    console.log(productId);
    this.dialog.open(MessageComponent,{  
      height: '350px',
      width: '400px',
      });
  }

}
