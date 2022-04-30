import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { LoginComponent } from '../component/login/login.component';


const routes : Routes = [{path:"",component : LoginComponent}]

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class RouterModule { }
