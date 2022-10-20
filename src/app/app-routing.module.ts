import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SeusIngressosComponent } from './pages/seus-ingressos/seus-ingressos.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"menu", component: MenuComponent},
  {path:"perfil", component: PerfilComponent},
  {path:"seus-ingressos", component: SeusIngressosComponent},
  {path:"sobre", component: SobreComponent},
  {path:"favoritos", component: FavoritosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
