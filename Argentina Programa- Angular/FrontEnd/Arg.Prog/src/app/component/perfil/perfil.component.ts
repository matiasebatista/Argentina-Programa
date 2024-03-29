import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/config/PersonaDto';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { faTrash,faPencil,faXmark } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';




@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers:[PortfolioService]
})


export class PerfilComponent implements OnInit {

  files:File[] = [];
  persona: Persona;
  isUserLogged: Boolean ;
  personaForm: FormGroup;
  faTrash = faTrash;
  faXmark = faXmark;
  faPencil = faPencil;
  idUser: number;
  isEdicion5:boolean;
  showAddTask5:boolean = false;
  subscription5?: Subscription;
  imgURL:any;
 imagePath:any;
  constructor( private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) { 
      this.persona = autenticacionService.UsuarioAutenticado;
      this.isUserLogged = autenticacionService.isUserLogged();
      this.idUser = this.autenticacionService.idUser();
      this.subscription5 = this.portfolioService.onToggle().subscribe(value => this.showAddTask5 = value);
      this.isEdicion5 = false;
   this.personaForm =  this.formBuilder.group ({
    id:[this.idUser],
     nombre:[''],
     apellido:[''],
     domicilio:[''],
     correo:[''],
     telefono:[''],
     fecha:[''],
     foto:[''],
     acercade:[''],
     contraseña:[''],

   })
  }

  ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  
  }

  private reloadData(){
    this.portfolioService.findUser(this.idUser).subscribe((data)=>{
      this.persona= data;
    });
   
}

private loadForm(persona:Persona){
  this.personaForm.setValue({
    id:this.idUser,
    nombre: persona.nombre,
    apellido:persona.apellido,
    domicilio:persona.domicilio,
    correo: persona.correo,
    telefono:persona.telefono,
    fecha:persona.fecha,
    foto:persona.foto,
    acercade:persona.acercade,
    contraseña:persona.contraseña,

  })
}
onSubmit(){
  let persona : Persona = {...this.persona,...this.personaForm.value}


  this.portfolioService.editUser(persona).subscribe(
    () => {
      
  
    this.reloadData();
    }
) 


this.isEdicion5 = false
}

onEditUser() {
  let persona:Persona = this.persona
  this.loadForm(persona)
  this.isEdicion5=true
}

// onFileChange(event:any){
//   if(event.target.files.length > 0){
//     const file:File= event.target.files[0];
//     let reader = new FileReader();
//     reader.readAsDataURL(file)
//     reader.onload = (_event) => { 
//       this.imgURL =  reader.result; 
//      this.personaForm.value.base64Foto = reader.result ; 
//      console.log(reader.result)
//     }
//   }
// }
//funcion iba a ser utilizada para guardar imagenes en la base de datos mySQL => se cambio por guardarlo en cloudinary.

onSelect(event:any) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

onUpload(){
  const file_data = this.files[0];

  const data = new FormData();

  data.append('file',file_data);
  data.append('upload_preset','perfil.foto')
  data.append('cloud_name','duooheafl')
  data.set("secure", 'true')

  this.portfolioService.uploadImage(data).subscribe((response)=>{
    if(response){
    console.log(response)}
   this.personaForm.value.foto = response.secure_url;
  
      
  })

  

}
}