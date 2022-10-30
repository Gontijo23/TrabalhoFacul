import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<usuario[]>{
    return this.http.get<usuario[]>("https://chatcolab.firebaseio.com/crud/121118394/clientes.json");
  }
}
