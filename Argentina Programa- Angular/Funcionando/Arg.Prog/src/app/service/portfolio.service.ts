import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {config} from '../config/config';
import { Educacion } from '../config/Educacion';
import { Persona } from '../config/PersonaDto';
import { Experiencia } from '../config/Experiencia';
import { Skill } from '../config/Skills';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private showAddTask: boolean = false;
  private showAddTask2: boolean = false;
  private subject = new Subject<any>();
  
  constructor(private http:HttpClient) { }

  findEducacion(id : number): Observable<any> {
    return this.http.get<any>(config.baseUrl + "Educacion/" + id);
  }
  saveEducacion(educacion:Educacion): Observable<Educacion> {
    return this.http.post<any>(config.baseUrl + "Educacion", educacion);
  }
  editEducacion(educacion: Educacion): Observable<any> {
    return this.http.put<any>(config.baseUrl + "Educacion", educacion);
  }
  deleteEducacion(id: number): Observable<any> {
    return this.http.delete<any>(config.baseUrl + "Educacion/" + id);
  }
  findAcercade(persona : Persona): Observable<any> {
return this.http.get<any>(config.baseUrl+"Acercade")
  }
  editAcercade(id:number): Observable<any> {
    return this.http.get<any>(config.baseUrl+"Acercade/" + id );

}


findExpLaboral(): Observable<any> {
  return this.http.get<any>(config.baseUrl + "ExpLaboral");
}
saveExpLaboral(experiencia: Experiencia): Observable<Experiencia> {
  return this.http.post<any>(config.baseUrl + "ExpLaboral", experiencia);
}
editExpLaboral(experiencia: Experiencia): Observable<any> {
  return this.http.put<any>(config.baseUrl + "ExpLaboral", experiencia);
}
deleteExpLaboral (id: number): Observable<any> {
  return this.http.delete<any>(config.baseUrl + "ExpLaboral/" + id);
}
deleteUser(id:number): Observable<any>{
  return this.http.delete<any>(config.baseUrl+"personas/"+ id );
}
editUser(persona:Persona): Observable<any>{
  return this.http.put<any>(config.baseUrl+"personas",persona );
}
findUser(id :  number): Observable<any>{
  return this.http.get<any>(config.baseUrl+"personas/" + id );
}
toggleAddTask(): void {

  this.showAddTask = !this.showAddTask;
  this.subject.next(this.showAddTask);
}

onToggle(): Observable <any>{
  return this.subject.asObservable();
}

toggleAddTask2(): void {

  this.showAddTask2 = !this.showAddTask2;
  this.subject.next(this.showAddTask2);
}
onToggle2(): Observable <any>{
  return this.subject.asObservable();
}

findSkill(): Observable<any> {
  return this.http.get<any>(config.baseUrl + "Skill");
}
saveSkill(skill : Skill): Observable<Skill> {
  return this.http.post<any>(config.baseUrl + "Skill", skill);
}
editSkill(skill:Skill): Observable<any> {
  return this.http.put<any>(config.baseUrl + "Skill",skill);
}
deleteSkill (id: number): Observable<any> {
  return this.http.delete<any>(config.baseUrl + "Skill/" + id);
}




}