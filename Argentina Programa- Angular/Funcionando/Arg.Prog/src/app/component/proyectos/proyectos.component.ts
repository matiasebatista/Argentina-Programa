import { Component, OnInit, Output,EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { Proyecto } from 'src/app/config/Proyecto';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  showAddTask:boolean = false;
  proyectoList: Proyecto[] = [];
  isUserLogged: Boolean = false ;
  proyectoForm: FormGroup;
  subscription?: Subscription;
  constructor(private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) { 
      this.subscription = this.portfolioService.onToggle().subscribe(value => this.showAddTask = value);
      this.proyectoList = this.autenticacionService.UsuarioAutenticado?.proyecto || [];
     
     this.proyectoForm=this.formBuilder.group({
      id:[''],
      Persona_id:[''],
      nombre:['',[Validators.required]],
      Ano:['',[Validators.required]]
     })
    }

  ngOnInit() {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  }
  private reloadData(){
    this.portfolioService.findSkill().subscribe((data)=>{
      this.proyectoList= data;
    });
  }
  
  private clearForm(){
    this.proyectoForm.setValue({
      id:'',
      Persona_id:'',
      nombre:'',
      Ano:'',
      descripcion_proy:''
    })
  }
  private loadForm(proyecto:  Proyecto){
    this.proyectoForm.setValue({
      id:proyecto.id,
      Persona_id:proyecto.Persona_id,
      nombre:proyecto.nombre,
      descripcion_proy:proyecto.descripcion_proy,
      Ano:proyecto.Ano
    })
}


}
