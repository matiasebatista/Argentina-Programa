import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,Form } from '@angular/forms';
import { PortfolioService } from 'src/app/service/portfolio.service';
import { AutenticacionService } from 'src/app/service/autenticacion.service';
import { Subscription } from 'rxjs';
import { faTrash,faPencil,faPlus, faTurkishLiraSign } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Headder_footer } from 'src/app/config/headder_footer';
@Component({
  selector: 'app-headder-footer',
  templateUrl: './headder-footer.component.html',
  styleUrls: ['./headder-footer.component.css']
})
export class HeadderFooterComponent implements OnInit {
  faPencil= faPencil;
  faPlus=faPlus;
  files:File[] = [];
  showAddTask6:boolean = false;
  headder_footer!: Headder_footer;
  isUserLogged: Boolean = false ;
  headder_footerForm: FormGroup;
  subscription6?: Subscription;
  idUser: number;
  isEdicion6:boolean;

  constructor(private portfolioService: PortfolioService,
    private autenticacionService: AutenticacionService,
    private formBuilder: FormBuilder,
    private router: Router) { 
      this.subscription6 = this.portfolioService.onToggle6().subscribe(value => this.showAddTask6 = value);
      this.idUser = this.autenticacionService.idUser();
      this.isEdicion6 = true;
    
      this.headder_footerForm=this.formBuilder.group({
        id:[''],
        persona:[this.idUser],
        headder:['',[Validators.required]],
        footer:['',[Validators.required]],
        facebook:['',Validators.required],
        instagram:['',Validators.required]
      
      })
    }

    ngOnInit(): void {
      this.isUserLogged=this.autenticacionService.isUserLogged();
      this.reloadData();
     

    
      
    }
  
    private reloadData(){
    this.portfolioService.findHeadder_footer(this.idUser).subscribe( (data)=>{
        this.headder_footer= data;
     
        if(this.headder_footer == null){
          this.isEdicion6 = false;
        }else{
          this.isEdicion6=true;
        }

      });
    }
  
    private loadForm(headder_footer:Headder_footer){
      this.headder_footerForm.setValue({
        id: headder_footer.id,
        persona:this.idUser,
        headder:headder_footer.headder,
        footer:headder_footer.footer,
        facebook:headder_footer.facebook,
        instagram:headder_footer.instagram
      })
  }
 

  onSubmit(){
    let headder_footer: Headder_footer= this.headder_footerForm.value;
    if(!this.isEdicion6){
      this.portfolioService.saveHeadder_footer(headder_footer).subscribe(
        (NewHeadder_footer:Headder_footer) =>{
         
          this.reloadData();
        }
      );
    }else{
      this.portfolioService.editHeadder_footer(headder_footer).subscribe(
          () => {
          console.log(headder_footer)
          this.reloadData();
          }
      ) 
    }
    this.onNewHeadder_footer()
    this.isEdicion6 = true


  }
  private clearForm(){
    this.headder_footerForm.setValue({
      id:'',
      persona:this.idUser,
      headder:'',
      footer:'',
      instagram:'',
      facebook:'' 
    })
  }

  logout() {
    this.autenticacionService.logout();
    this.isUserLogged = false;

    this.router.navigate(['/login'])
  
  }

  onNewHeadder_footer() {

    this.clearForm();
    this.portfolioService.toggleAddTask6();
    console.log(this.isEdicion6)

    } 
    onEditHeadder_footer(){
     console.log(this.headder_footer)
      this.loadForm(this.headder_footer)
      this.portfolioService.toggleAddTask6();
    }


    onSelect(event:any) {
      console.log(event);
      this.files.push(...event.addedFiles);
    }
    
    onRemove(event:any) {
      console.log(event);
      this.files.splice(this.files.indexOf(event), 1);
      this.headder_footerForm.value.headder = null;
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
       this.headder_footerForm.value.headder = response.secure_url;

      })
    
      
    
    }

}
