import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { Educacion } from 'src/app/config/Educacion';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { faTrash,faPencil,faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})


export class EduComponent implements OnInit {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  faPlus = faPlus;
  faTrash = faTrash;
  faPencil = faPencil;
  faXmark = faXmark;
  @Output() btnClick = new EventEmitter();
  files:File[] = [];
  showAddTask:boolean = false;
  educacionList: Educacion[] = [];
  isUserLogged: Boolean = false ;
  educacionForm: FormGroup;
  subscription?: Subscription;
  editForm: any;
  idUser: number;
  isEdicion:boolean;

  constructor(   private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) {
      this.subscription = this.portfolioService.onToggle().subscribe(value => this.showAddTask = value);
      this.educacionList = this.autenticacionService.UsuarioAutenticado?.educacion || [];
      this.idUser = this.autenticacionService.idUser();
      this.isEdicion = false;
    this.educacionForm=this.formBuilder.group({
      id:[''],
      establecimiento:['' ,[Validators.required]],
      ano_egreso:[''],
      ano_ingreso:[''],
      nombre_titulo:['',[Validators.required]],
      nivel:['',[Validators.required]],
      persona:[this.idUser],
      img:[""]
    })
   }

 

  ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  }
  private reloadData(){
    this.portfolioService.findEducacion(this.idUser).subscribe((data)=>{
      this.educacionList= data;
    });
  }
  private clearForm(){
    this.educacionForm.setValue({
      id:'',
      persona:this.idUser,
      establecimiento:'',
      ano_egreso:'',
      ano_ingreso:'',
      nivel:'',
      nombre_titulo:'',
      img:''
    })
  }
    private loadForm(educacion:Educacion){
      this.educacionForm.setValue({
        id:educacion.id,
        persona:educacion.persona,
        establecimiento:educacion.establecimiento,
        ano_egreso:educacion.ano_egreso,
        ano_ingreso:educacion.ano_ingreso,
        nivel:educacion.nivel,
        nombre_titulo:educacion.nombre_titulo,
        img:educacion.img
      })
    }
    onSubmit(){
      let educacion : Educacion = this.educacionForm.value;
      if(!this.isEdicion){
        this.portfolioService.saveEducacion(educacion).subscribe(
          (newEducacion:Educacion) =>{
           
            this.reloadData();
          }
        );
      }else{
        this.portfolioService.editEducacion(educacion).subscribe(
            () => {
            console.log(educacion)
            this.reloadData();
            }
        ) 
      }
      this.onNewEducacion()
      
    }
    
    onNewEducacion() {
    this.isEdicion=false;
    this.clearForm();
    this.portfolioService.toggleAddTask();
    } 

    onEditEducacion(index: number) {
     this.isEdicion = true;
      let educacion: Educacion = this.educacionList[index];
      this.portfolioService.toggleAddTask();
      this.loadForm(educacion);
     
    }

    onDeleteEducacion(index: number) {
      let educacion: Educacion = this.educacionList[index];
      if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
        this.portfolioService.deleteEducacion(educacion.id).subscribe(
          () => {
            this.reloadData();
          }
        )
      }
    }

      toggleAddTask(){
        this.onNewEducacion() ;
       
      }
  
      

      onSelect(event:any) {
        console.log(event);
        this.files.push(...event.addedFiles);
      }
      
      onRemove(event:any) {
        console.log(event);
        this.files.splice(this.files.indexOf(event), 1);
        this.educacionForm.value.img = null;
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
         this.educacionForm.value.img = response.secure_url;

        })
      
        
      
      }


  }



