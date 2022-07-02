import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { Skill } from 'src/app/config/Skills';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hardand-soft',
  templateUrl: './hardand-soft.component.html',
  styleUrls: ['./hardand-soft.component.css']
})
export class HardandSoftComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  showAddTask:boolean = false;
  skillList: Skill[] = [];
  isUserLogged: Boolean = false ;
  skillForm: FormGroup;
  subscription?: Subscription;
  constructor(private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder) {
      this.subscription = this.portfolioService.onToggle().subscribe(value => this.showAddTask = value);
      this.skillList = this.autenticacionService.UsuarioAutenticado?.skill || [];
     
     this.skillForm=this.formBuilder.group({
      id:[''],
      Persona_id:[''],
      Nombre:['',[Validators.required]],
      porcentaje:['',[Validators.required]]
     })
  }


  ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  }
  private reloadData(){
    this.portfolioService.findSkill().subscribe((data)=>{
      this.skillList= data;
    });
  }

  private clearForm(){
    this.skillForm.setValue({
      id:'',
      Persona_id:'',
      Nombre:'',
      porcentaje:'',
    })
  }

  private loadForm(skill:Skill){
    this.skillForm.setValue({
      id:skill.id,
      Persona_id:skill.Persona_id,
      Nombre:skill.Nombre,
      porcentaje:skill.porcentaje,
    
    })
}
onSubmit(){
  let skill:Skill = this.skillForm.value;
  if(this.skillForm.get('id')?.value == ''){
    this.portfolioService.saveSkill(skill).subscribe(
      (newSkill : Skill) =>{
        this.skillList.push(newSkill);
      }
    );
  }else{
    this.portfolioService.editSkill(skill).subscribe(
        () => {
        this.reloadData();
        }
    ) 
  }
}






}
