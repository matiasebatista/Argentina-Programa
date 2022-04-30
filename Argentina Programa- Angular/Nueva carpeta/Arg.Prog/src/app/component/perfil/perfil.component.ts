import { Component, OnInit } from '@angular/core';

// interface Persona {
//   nombre:string;
//   apellido:string;
// }

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})


export class PerfilComponent implements OnInit {
  // infoPerfil:Persona;
  constructor() { 
    // this.infoPerfil = {nombre:"matias",apellido:""};
  }

  ngOnInit(): void {
  }

}
