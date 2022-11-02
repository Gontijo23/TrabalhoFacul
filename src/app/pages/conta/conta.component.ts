import { Component, OnInit } from '@angular/core';
import { usuario } from 'src/app/models/usuario';
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

  lerUsuarios(){
    
    let observable = this.usuarioService.getAll();
    observable.subscribe(listaUsuario =>{
      const entries =Object.entries(listaUsuario);
      console.log(listaUsuario);

      entries.forEach(entry => {
        console.log(entry);
      })
    })
  }
  lerUsuario(id: string){
    let observable = this.usuarioService.get(id);
    observable.subscribe(usuario =>{
      console.log("Apenas um usuario: ", usuario);

    })
  }
  novoUsuario(){
    const c= new usuario();
    c.nome ="claudin"
    c.email ="caludingmail"
    c.endereço ="rua dos bobos"
    c.id =""
    c.idade ="23"
    c.senha ="claudin123"
    let observable = this.usuarioService.post(c);
    observable.subscribe(s =>{
      console.log("Criando um usuario: ", s);

    })
  }

  alteraUsuario(){
    const c= new usuario();
    c.nome ="julim"
    c.email ="julingmail"
    c.endereço ="rua dos bobos"
    c.id =""
    c.idade ="23"
    c.senha ="julin123"
    let observable = this.usuarioService.put("-NFdz1yClTVYaEHzqwE9",c);
    observable.subscribe(c =>{
      console.log("Alterando um usuario: ", c); 
    })
  }
  excluirUsuario(){
    let observable = this.usuarioService.delete("-NFdzAs_7F1yzvksv-HQ");
    observable.subscribe(usuario =>{
      console.log("Exclui um usuario: ", usuario);
    })
  }
}
