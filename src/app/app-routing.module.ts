import { ListaComponent } from './usuarios/lista/lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  {path: 'home', component: ListaComponent},
  {path: 'usuario/:id', component: UsuarioComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
