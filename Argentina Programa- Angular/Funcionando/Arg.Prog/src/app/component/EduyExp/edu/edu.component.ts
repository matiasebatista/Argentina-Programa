import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { Educacion } from 'src/app/config/Educacion';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

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
  @Output() btnClick = new EventEmitter();
  showAddTask:boolean = false;
  educacionList: Educacion[] = [];
  isUserLogged: Boolean = false ;
  educacionForm: FormGroup;
  subscription?: Subscription;
  editForm: any;
  idUser: number;
  isEdicion:boolean ;

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
      ano_egreso:['',[Validators.required]],
      ano_ingreso:['',[Validators.required]],
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
            
            this.reloadData();
            }
        ) 
      }
      this.onNewEducacion()
    }
    
    onNewEducacion() {
      this.isEdicion=false
    this.clearForm();
    this.portfolioService.toggleAddTask();
    } 

    onEditEducacion(i: number) {
     this.isEdicion = true;
      let educacion: Educacion = this.educacionList[i];
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
  
      



  }



