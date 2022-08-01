import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:8080/personas/login"
  
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
currentUserSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser')||'{}'))
   }

 public loginUser(credenciales:any):Observable<any>{
  return this.http.post(this.url,credenciales,{
    headers:this.headers
  }).pipe(map(data =>{
sessionStorage.setItem('currentUser',JSON.stringify(data));
this.currentUserSubject.next(data);
    return data;
  }))
}
get UsuarioAutenticado() {
  return this.currentUserSubject.value;
}
public logout() {
  sessionStorage.removeItem("currentUser");
  

}

public isUserLogged():boolean {
  return sessionStorage.getItem("currentUser") != null;
}

public idUser (): number {
  return JSON.parse(sessionStorage.getItem("currentUser")|| "" ).id;
}



}
