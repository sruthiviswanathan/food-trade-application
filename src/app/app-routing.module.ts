import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ViewproductsComponent } from './components/viewproducts/viewproducts.component';
import { ProducthistoryComponent } from './components/producthistory/producthistory.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'home' , component: DashboardComponent},
  {path:'login' , component: LoginComponent},
  {path:'addproduct' , component: AddproductComponent},
  {path:'viewproducts',component:ViewproductsComponent},
  {path:'producthistory/:id',component:ProducthistoryComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
