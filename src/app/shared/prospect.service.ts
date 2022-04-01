import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProspectModel, ProspectModelBuilder, StatusModel } from './prospecto.models';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ProspectService {
  BASE_URL = 'http://hrmmzt.pythonanywhere.com/api/v1/'
  constructor(private http: HttpClient) { 
  }



  //private url = 'http://localhost:8000/api/v1/udis/2022-03-29/2022-03-29'
 
  
  public getUdis(fecha_inicial: string, fecha_final: string): Observable<any> {
    let url = `${this.BASE_URL}udis/${fecha_inicial}/${fecha_final}`
    return this.http.get(url);  
  }

  public getDolares(fecha_inicial: string, fecha_final: string): Observable<any>{
    return this.http.get(`${this.BASE_URL}dolares/${fecha_inicial}/${fecha_final}`);
  }

  public getTiies(fecha_inicial: string, fecha_final: string): Observable<any>{
    return this.http.get(`${this.BASE_URL}tiie/${fecha_inicial}/${fecha_final}`);
  }
  public getAllProspects(): Observable<any> {
    return this.http.get('http://localhost:5000/api/prospect')
  }

  getUsers() {
    this.http.get("https://reqres.in/api/users?page=2").subscribe(data => {
      console.log("Ahi van los usuarios");
      console.log(data);
    });
  }

  getUsersAny(): Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getProspect(id: number){
    return this.http.get<ProspectModel>('http://localhost:5000/api/prospect/' + id);
  }


  addProspect(prospect: ProspectModel){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.post<ProspectModel>('http://localhost:5000/api/prospect', prospect, {headers});
  }

  updateProspect(statusModel: StatusModel, id: any){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.http.put<StatusModel>('http://localhost:5000/api/prospect/'+ id , statusModel, {headers})
  }


}
