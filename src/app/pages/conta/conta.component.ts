import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  constructor( private usuarioService: UsuarioService ) { }

  ngOnInit(): void {
  }

  lerUsuario(){
    let observable = this.usuarioService.getAll();
    observable.subscribe(listaUsuario =>{
      console.log(listaUsuario);
    })
  }
}
