import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import  {Experiencia} from '../../../config/Experiencia';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { faTrash,faPencil,faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  faTrash = faTrash;
  faXmark = faXmark;
  faPencil = faPencil;
  @Output() btnClick = new EventEmitter();
  showAddTask2:boolean = false;
  experienciaList: Experiencia[] = [];
  isUserLogged: Boolean = false ;
  experienciaForm: FormGroup;
  subscription2?: Subscription;
  editForm: any;
  idUser: number;
  isEdicion2:boolean;
  constructor(private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) {
      this.subscription2 = this.portfolioService.onToggle2().subscribe(value => this.showAddTask2 = value);
      this.experienciaList = this.autenticacionService.UsuarioAutenticado?.experiencia || [];
      this.idUser = this.autenticacionService.idUser();
      this.isEdicion2 = false;
      this.experienciaForm=this.formBuilder.group({
        id:[''],
        nombre_empresa:['',[Validators.required]],
        fechainicio:['',[Validators.required]],
        fechafin:['',[Validators.required]],
        descripcion:['',[Validators.required]],
        tipo_empleo:['',[Validators.required]],
        persona:[this.idUser],
        es_trabajo_actual:['']
      })
     }

  ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  }
  private reloadData(){
    this.portfolioService.findExpLaboral(this.idUser).subscribe((data)=>{
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
    persona:this.idUser,
    es_trabajo_actual:''
  })
}
private loadForm(experiencia : Experiencia ){
  this.experienciaForm.setValue({
    id:experiencia.id,
    persona:experiencia.persona,
    nombre_empresa:experiencia.nombre_empresa,
    fechafin:experiencia.fechafin,
    fechainicio:experiencia.fechainicio,
    tipo_empleo:experiencia.tipo_empleo,
    es_trabajo_actual:experiencia.es_trabajo_actual,
    descripcion:experiencia.descripcion
    
  })
}



onSubmit(){
  let experiencia : Experiencia = this.experienciaForm.value;
  if(!this.isEdicion2){
    this.portfolioService.saveExpLaboral(experiencia).subscribe(
      (newExperiencia : Experiencia) =>{
       
        this.reloadData();
      }
    );
  }else{
    this.portfolioService.editExpLaboral(experiencia).subscribe(
        () => {
        
        this.reloadData();
        }
    ) 
  }
  this.onNewExpLaboral()
}

onNewExpLaboral() {
  this.isEdicion2=false
  this.clearForm();
  this.portfolioService.toggleAddTask2();
  } 

  onEditExpLaboral(index: number) {
    this.isEdicion2 = true;
    let experiencia : Experiencia = this.experienciaList[index];
    this.portfolioService.toggleAddTask2();
    this.loadForm(experiencia);
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
      this.onNewExpLaboral() ;
    }

}
