import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
import { PortfolioComponent } from "./component/portfolio/portfolio.component";
import { GuardGuard } from './service/guard.guard';





const routes : Routes = [
  {path:'login',component: LoginComponent, pathMatch:"full"},
  {path:'portfolio',component:PortfolioComponent},
  {path:'',redirectTo:'login',pathMatch:'full'} 
  ];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
