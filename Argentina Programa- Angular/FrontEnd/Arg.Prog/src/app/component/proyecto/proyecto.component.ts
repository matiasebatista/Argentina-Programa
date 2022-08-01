import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { Educacion } from 'src/app/config/Educacion';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpHeaders } from '@angular/common/http';
import { from, Subscription } from 'rxjs';
import { Proyecto } from 'src/app/config/Proyecto';
import { faTrash,faPencil,faXmark } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']

})
export class ProyectoComponent implements OnInit {
  faTrash = faTrash;
  faXmark=faXmark;
  faPencil = faPencil;
  @Output() btnClick = new EventEmitter();
  showAddTask4:boolean = false;
  proyectoList: Proyecto[] = [];
  isUserLogged: Boolean = false ;
  proyectoForm: FormGroup;
  subscription4?: Subscription;
  editForm: any;
  idUser: number;
  isEdicion4:boolean;
  constructor(private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) { 
      this.subscription4 = this.portfolioService.onToggle4().subscribe(value => this.showAddTask4 = value);
      this.proyectoList = this.autenticacionService.UsuarioAutenticado?.proyecto || [];
      this.idUser = this.autenticacionService.idUser();
      this.isEdicion4 = false;
      this.proyectoForm=this.formBuilder.group({
        id:[''],
        nombre:['',[Validators.required]],
        descripcion_proy:['',[Validators.required]],
        Ano:['',[Validators.required]],
        link:[''],
        persona:[this.idUser]
      })
    }

  ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  }
  private reloadData(){
    this.portfolioService.findProyecto(this.idUser).subscribe((data)=>{
      this.proyectoList= data;
    });
  }
  private clearForm(){
    this.proyectoForm.setValue({
      id:'',
      nombre:'',
      descripcion_proy:'',
      Ano:'',
      persona:this.idUser,
      link:''
    })
  }

  private loadForm(proyecto:Proyecto){
    this.proyectoForm.setValue({
      id:proyecto.id,
      persona:this.idUser,
      nombre:proyecto.nombre,
      Ano:proyecto.Ano,
      descripcion_proy:proyecto.descripcion_proy,
      link:proyecto.link
    })
  }
  onSubmit(){
    let proyecto:Proyecto = this.proyectoForm.value;
    if(!this.isEdicion4){
      this.portfolioService.saveProyecto(proyecto).subscribe(
        (newProyecto:Proyecto) =>{
         
          this.reloadData();
        }
      );
    }else{
      this.portfolioService.editProyecto(proyecto).subscribe(
          () => {
          
          this.reloadData();
          }
      ) 
    }
    this.onNewProyecto()
  }
  onNewProyecto() {
    this.isEdicion4=false;
    this.clearForm();
    this.portfolioService.toggleAddTask4();
    } 
    onEditProyecto(index: number) {
      this.isEdicion4 = true;
       let proyecto:Proyecto= this.proyectoList[index];
       this.portfolioService.toggleAddTask4();
       this.loadForm(proyecto);
      
     }

     onDeleteProyecto(index: number) {
      let proyecto:Proyecto = this.proyectoList[index];
      if (confirm("¿Está seguro que desea borrar el proyecto seleccionado?")) {
        this.portfolioService.deleteProyecto(proyecto.id).subscribe(
          () => {
            this.reloadData();
          }
        )
      }
    }

      toggleAddTask4(){
        this.onNewProyecto() ;
       
      }

}
