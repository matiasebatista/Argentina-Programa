import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { Educacion } from 'src/app/config/Educacion';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';


@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})


export class EduComponent implements OnInit {
  educacionList: Educacion[] = [];
  isUserLogged: Boolean = false ;
  educacionForm: FormGroup;
  constructor(   private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) {
    this.educacionForm=this.formBuilder.group({
      id:[''],
      establecimiento:['',[Validators.required]],
      ano_egreso:['',[Validators.required]],
      ano_ingreso:['',[Validators.required]],
      nombre_titulo:['',[Validators.required]],
      nivel:['',[Validators.required]],
      Persona_id:[''],
      img:[]
    })
   }


  ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  }
  private reloadData(){
    this.portfolioService.getEducacion().subscribe((data)=>{
      this.educacionList= data;
    });
  }
  private clearForm(){
    this.educacionForm.setValue({
      id:'',
      Persona_id:'',
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
        Persona_id:educacion.Persona_id,
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
      if(this.educacionForm.get('id')?.value == ''){
        this.portfolioService.saveEducacion(educacion).subscribe(
          (newEducacion:Educacion) =>{
            this.educacionList.push(newEducacion);
          }
        );
      }else{
        this.portfolioService.editEducacion(educacion).subscribe(
            () => {
            this.reloadData();
            }
        )
        
      }
    }
    onNewEducation() {
    this.clearForm();
    } 
    onEditEducation(index: number) {
      let educacion: Educacion = this.educacionList[index];
      this.loadForm(educacion);
    }
    onDeleteEducation(index: number) {
      let educacion: Educacion = this.educacionList[index];
      if (confirm("¿Está seguro que desea borrar la educación seleccionada?")) {
        this.portfolioService.deleteEducacion(educacion.id).subscribe(
          () => {
            this.reloadData();
          }
        )
      }
    }
  }

