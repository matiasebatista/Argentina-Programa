import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { AppRoutingModule } from './app-routing.module';
import { PerfilComponent } from './component/perfil/perfil.component';

import { EduComponent } from './component/EduyExp/edu/edu.component';
import { ExpComponent } from './component/EduyExp/exp/exp.component';
import { HardandSoftComponent } from './component/hardand-soft/hardand-soft.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { PortfolioService } from './service/portfolio.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './service/interceptor.service';
import { FontAwesomeModule,FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from './component/button/button.component';
import { ProyectoComponent } from './component/proyecto/proyecto.component';
import { HeadderFooterComponent } from './component/headder-footer/headder-footer.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PortfolioComponent,
    PerfilComponent,
    
    EduComponent,
    ExpComponent,
    HardandSoftComponent,

    ButtonComponent,
     ProyectoComponent,
     HeadderFooterComponent,



     
    
  
  ],
  imports: [
    RouterModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    NgxDropzoneModule
    
    
  ],
  providers: [PortfolioService,{provide: HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true},],
  bootstrap: [AppComponent]
})
export class AppModule { }
