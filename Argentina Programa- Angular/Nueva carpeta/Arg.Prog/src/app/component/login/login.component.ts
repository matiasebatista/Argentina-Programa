import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioCreado:FormGroup;

  constructor(private formBuilder : FormBuilder,) {
    this.formularioCreado = this.formBuilder.group({
      email : ["",Validators.compose([Validators.required,Validators.email])],
      password:["",Validators.compose([Validators.required,Validators.minLength(8)])]

    });


  }

  ngOnInit(): void {
  }

  onEnviar(){

  
  }
}
