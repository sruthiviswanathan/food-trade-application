import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MatDialogModule} from '@angular/material/dialog';
import {  MatInputModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { ProducthistoryComponent } from './components/producthistory/producthistory.component';
import { LoginComponent } from './components/login/login.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    DashboardComponent,
    AddproductComponent,
    ViewproductsComponent,
    ProducthistoryComponent,
    LoginComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [MessageComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
