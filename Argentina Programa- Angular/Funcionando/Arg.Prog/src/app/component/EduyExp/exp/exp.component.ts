import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import  {Experiencia} from '../../../config/Experiencia';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  showAddTask2:boolean = false;
  experienciaList: Experiencia[] = [];
  isUserLogged: Boolean = false ;
  experienciaForm: FormGroup;
  subscription?: Subscription;
  @Output() btnClick = new EventEmitter();
  editForm: any;
  constructor(private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) {
      this.subscription = this.portfolioService.onToggle2().subscribe(value => this.showAddTask2 = value);
      this.experienciaList = this.autenticacionService.UsuarioAutenticado?.experiencia || [];

      this.experienciaForm=this.formBuilder.group({
        id:[''],
        nombre_empresa:['',[Validators.required]],
        fechainicio:['',[Validators.required]],
        fechafin:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        tipo_empleo:['',[Validators.required]],
        Persona_id:[''],
        es_trabajo_actual:[""]
      })
     }

  ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  }
  private reloadData(){
    this.portfolioService.findExpLaboral().subscribe((data)=>{
      this.experienciaList= data;
    });
}

private clearForm(){
  this.experienciaForm.setValue({
    id:'',
    nombre_empresa:'',
    fechainicio:'',
    fechafin:'',
    descripcion:'',
    tipo_empleo:'',
    Persona_id:'',
    es_trabajo_actual:''
  })
}
private loadForm(experiencia : Experiencia ){
  this.experienciaForm.setValue({
    id:experiencia.id,
    Persona_id:experiencia.Persona_id,
    nombre_empresa:experiencia.nombre_empresa,
    fechafin:experiencia.fechafin,
    fechainicio:experiencia.fechainicio,
    tipo_empleo:experiencia.tipo_empleo,
    es_trabajo_actual:experiencia.es_trabajo_actual,
    descripcion:experiencia.descripcion
    
  })
}

fillForm (experiencia:Experiencia){
  this.editForm.controls.name.setValue(experiencia.nombre_empresa);
  this.editForm.controls.name.setValue(experiencia.fechafin);
  this.editForm.controls.name.setValue(experiencia.fechainicio);
  this.editForm.controls.name.setValue(experiencia.tipo_empleo);
  this.editForm.controls.name.setValue(experiencia.es_trabajo_actual);
  this.editForm.controls.name.setValue(experiencia.descripcion);
  this.editForm.updateValueAndValidity();
}

onSubmit(){
  let experiencia = this.experienciaForm.value;
  if(this.experienciaForm.get('id')?.value == ''){
    this.portfolioService.saveExpLaboral(experiencia).subscribe(
      (newExperiencia : Experiencia ) =>{
        this.experienciaList.push(newExperiencia);
      }
    );
  }else{
    this.portfolioService.editExpLaboral(experiencia).subscribe(
        () => {
        this.reloadData();
        }
    )
    
  }
}
onNewExpLaboral() {
  this.clearForm();
  } 

  onEditExpLaboral(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    this.fillForm(experiencia);
  }

  onDeleteExpLaboral(index: number) {
    let experiencia: Experiencia = this.experienciaList[index];
    if (confirm("¿Está seguro que desea borrar la experiencia seleccionada?")) {
      this.portfolioService.deleteExpLaboral(experiencia.id).subscribe(
        () => {
          this.reloadData();
        }
      )
    }
  }

    toggleAddTask2(){
      this.portfolioService.toggleAddTask2();
    }

}
