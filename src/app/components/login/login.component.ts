import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MatDialog, MatDialogRef } from  '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

    public  email:  string  =  "";
    public  password:  string  =  "";


    constructor(private  dialog:  MatDialog, private  router:  Router) { }

    ngOnInit() {
   
    }

    login(){
        if(this.email  ===  "email@email.com"  &&  this.password  === "p@ssw0rd")
        {
            //this.router.navigate(['success']);
            console.log("success");
        }
        else
        {
            this.dialog.open(MessageComponent,{ data: {
            message:  "Error!!!"
            }});
            console.log("error");
        }
    }

}
