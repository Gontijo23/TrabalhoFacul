import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  entidade = "clientes"

  constructor(private http: HttpClient) { }

  getAll(): Observable<usuario[]>{
    return this.http.get<usuario[]>(`${environment.urlBase}${environment.appClientId}/${this.entidade}.json`);
  }

  get(id: string): Observable<usuario>{
    return this.http.get<usuario>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${id}.json`);
  }

  post(Usuario : usuario): Observable<string>{
    return this.http.post<string>(`${environment.urlBase}${environment.appClientId}/${this.entidade}.json`,
    Usuario);
  }

  put(id: string, Usuario : usuario): Observable<usuario>{
    return this.http.put<usuario>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${id}.json`, Usuario);
  }
  
  delete(id: string): Observable<any>{
    return this.http.delete<any>(`${environment.urlBase}${environment.appClientId}/${this.entidade}/${id}.json`);
  }
}