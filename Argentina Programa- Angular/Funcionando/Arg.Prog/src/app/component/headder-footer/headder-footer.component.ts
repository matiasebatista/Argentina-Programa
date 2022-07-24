import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { Headder_footer} from '../../config/headder_footer'
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { faTrash,faPencil,faXmark } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-headder-footer',
  templateUrl: './headder-footer.component.html',
  styleUrls: ['./headder-footer.component.css']
})
export class HeadderFooterComponent implements OnInit {

  showAddTask3:boolean = false;
  headder_footerList: Headder_footer[] = [];
  isUserLogged: Boolean = false ;
  headder_footerForm: FormGroup;
  subscription?: Subscription;
  idUser: number;
  isEdicion6:boolean;
  constructor(
    private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder
  ) {
    this.subscription = this.portfolioService.onToggle3().subscribe(value => this.showAddTask3 = value);
    this.headder_footerList = this.autenticacionService.UsuarioAutenticado?.skill || [];
    this.idUser = this.autenticacionService.idUser();
    this.isEdicion6 = false;

    this.headder_footerForm=this.formBuilder.group({
      id:[''],
      persona:[this.idUser],
      headder_footer:['',[Validators.required]],
    
    })
   }

   ngOnInit(): void {
    this.isUserLogged=this.autenticacionService.isUserLogged();
    this.reloadData();
  }

  private reloadData(){
    this.portfolioService.findHeadder_footer(this.idUser).subscribe((data)=>{
      this.headder_footerList= data;
    });
  }

  
  private clearForm(){
    this.headder_footerForm.setValue({
      id:'',
      persona:this.idUser,
      headder_footer:'',
    
    })
  }

  private loadForm(headder_footer:Headder_footer){
    this.headder_footerForm.setValue({
      id:headder_footer.id,
      persona:this.idUser,
      headder_footer:headder_footer.headder_footer,
     
  
    })
}

onSubmit(){
  let headder_footer : Headder_footer = this.headder_footerForm.value;
  if(!this.isEdicion6){
    this.portfolioService.saveHeadder_footer(headder_footer).subscribe(
      (newHeadder_footer:Headder_footer) =>{
       
        this.reloadData();
      }
    );
  }else{
    this.portfolioService.editHeadder_footer(headder_footer).subscribe(
        () => {
        
        this.reloadData();
        }
    ) 
  }
  this.onNewSkill()
}

onNewSkill() {
  this.isEdicion6=false
  this.clearForm();
  this.portfolioService.toggleAddTask3();
  } 

  onEditSkill(index: number) {
    this.isEdicion6 = true;
    let headder_footer:Headder_footer = this.headder_footerList[index];
    this.portfolioService.toggleAddTask6();
    this.loadForm(headder_footer);
  }





}
