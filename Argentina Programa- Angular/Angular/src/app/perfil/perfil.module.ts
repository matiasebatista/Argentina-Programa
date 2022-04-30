import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../perfil/perfil.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PerfilModule { }
