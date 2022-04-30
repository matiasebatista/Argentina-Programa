import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/service/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form:FormGroup;

  constructor(private formBuilder: FormBuilder,private autenticacionService:AutenticacionService, private ruta : Router) {
    this.form=this.formBuilder.group({
      pmail:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      deviceInfo: this.formBuilder.group({
      deviceId:[""],
      deviceType:[""],
      notificationToken:[""]

      })
    })
   }

  ngOnInit(): void {
  }
//   get Email(){
//     return this.form.get('email');
//   }
  
//   get Password(){
//     return this.form.get('password');
//   }
// onEnviar(event:Event){
//   event.preventDefault;
//   this.autenticacionService.IniciarSesion(this.form.value).subscribe(data => { console.log("DATA:" + JSON.stringify(data));
// this.ruta.navigate(['/portfolio']);
// })
// }


}

