import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,Form } from '@angular/forms';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import {Persona } from '../../config/PersonaDto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioCreado:FormGroup;
  constructor(
    private formBuilder : FormBuilder,
    private autenticacionService: AutenticacionService,
    private router: Router
    ) {
    this.formularioCreado = this.formBuilder.group({
      correo : ["",Validators.compose([Validators.required,Validators.email])],
     contraseña:["",Validators.compose([Validators.required,Validators.minLength(8)])]

    });

  }
  ngOnInit(): void {
  }

onLogin(){
  if (Response){
    this.router.navigate(['/login'])};
}



  onEnviar(){
    this.autenticacionService.loginUser(this.formularioCreado.value).subscribe(
      (response: Persona) => {
        if (response){
          this.router.navigate(['/portfolio'])};
      }
    );
  }
}

