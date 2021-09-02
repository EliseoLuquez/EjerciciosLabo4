import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from './ejercicio02/ejercicio02.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'ejercicio02', component:Ejercicio02Component},
  {path: 'login', component:LoginComponent},
  {path: 'error', component:ErrorComponent},
  {path: 'bienvenido', component:BienvenidoComponent},
  {path: 'ejercicio01', component:Ejercicio01Component},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  tittle = "Primer Ejercicio";
}
