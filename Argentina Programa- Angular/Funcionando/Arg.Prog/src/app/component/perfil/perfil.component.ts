import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/config/PersonaDto';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
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
  persona: Persona;
  isUserLogged: Boolean ;
  personaForm: FormGroup;

  
  constructor( private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) { 
      this.persona = autenticacionService.UsuarioAutenticado;
      this.isUserLogged = autenticacionService.isUserLogged();
   this.personaForm =  this.formBuilder.group ({
     nombre:[this.persona.nombre || ''],
     apellido:[this.persona.apellido  ||  ''],
     domicilio:[this.persona.domicilio  ||  ''],
     correo:[this.persona.correo  ||  ''],
     telefono:[this.persona.telefono ||  ''],
     fecha_nac:[this.persona.fecha_nac ||  ''],
     foto:[this.persona.foto ||  ''],
     acercade:[this.persona.acercade  ||  ''],
     contrasena:[this.persona.contrasena  ||  '']
   })
  }

  ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
    console.log(this.isUserLogged)
  }

  private reloadData(){
    this.portfolioService.findUser(this.persona.id).subscribe((data)=>{
      this.persona= data;
    });
   
}

private loadForm(persona:Persona){
  this.personaForm.setValue({
    nombre: persona.nombre,
    apellido:persona.apellido,
    domicilio:persona.domicilio,
    correo: persona.correo,
    telefono:persona.telefono,
    fecha_nac:persona.fecha_nac,
    foto:persona.foto,
    acercade:persona.acercade,
    contrasena:persona.contrasena
  })
}

onEditUser(index: number) {
  let persona: Persona = this.persona;
  this.loadForm(persona);

}

}