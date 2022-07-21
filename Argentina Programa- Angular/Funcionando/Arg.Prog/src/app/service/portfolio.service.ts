import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {config} from '../config/config';
import { Educacion } from '../config/Educacion';
import { Persona } from '../config/PersonaDto';
import { Experiencia } from '../config/Experiencia';
import { Skill } from '../config/Skills';
import { Proyecto } from '../config/Proyecto';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private showAddTask: boolean = false;
  private showAddTask2: boolean = false;
  private showAddTask3: boolean = false;
  private showAddTask4: boolean = false;
  private showAddTask5: boolean = false;
  private subject = new Subject<any>();
  private subject2 = new Subject<any>();
  private subject3 = new Subject<any>();
  private subject4 = new Subject<any>();
   private subject5 = new Subject<any>();
  
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


findExpLaboral(id : number): Observable<any> {
  return this.http.get<any>(config.baseUrl + "ExpLaboral/" + id);
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
saveUser(persona: Persona):Observable<any>{
  return this.http.post<any>(config.baseUrl + "User",persona)
}
findSkill(id:number): Observable<any> {
  return this.http.get<any>(config.baseUrl + "Skill/" + id);
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

findProyecto(id:number): Observable<any> {
  return this.http.get<any>(config.baseUrl + "Proyecto/" + id);
}
saveProyecto(proyecto : Proyecto): Observable<Proyecto> {
  return this.http.post<any>(config.baseUrl + "Proyecto", proyecto);
}
editProyecto(proyecto : Proyecto): Observable<any> {
  return this.http.put<any>(config.baseUrl + "Proyecto",proyecto);
}
deleteProyecto (id: number): Observable<any> {
  return this.http.delete<any>(config.baseUrl + "Proyecto/" + id);
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
  this.subject2.next(this.showAddTask2);
}
onToggle2(): Observable <any>{
  return this.subject2.asObservable();
}

toggleAddTask3(): void {

  this.showAddTask3 = !this.showAddTask3;
  this.subject3.next(this.showAddTask3);
}
onToggle3(): Observable <any>{
  return this.subject3.asObservable();
}

toggleAddTask4(): void {

  this.showAddTask4 = !this.showAddTask4;
  this.subject4.next(this.showAddTask4);
}

onToggle4(): Observable <any>{
  return this.subject4.asObservable();
}

toggleAddTask5(): void {

  this.showAddTask5 = !this.showAddTask5;
  this.subject5.next(this.showAddTask5);
}

onToggle5(): Observable <any>{
  return this.subject5.asObservable();
}



}