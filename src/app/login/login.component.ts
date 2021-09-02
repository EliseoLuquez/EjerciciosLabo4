import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Clases/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nombre: string = "";
  clave: string = "";
  myUsuario: Usuario  = new Usuario(this.nombre, this.clave);

  constructor() {
  }
  
  ngOnInit(): void {
  }

}
