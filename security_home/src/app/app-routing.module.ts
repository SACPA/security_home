import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContraseniaolvidadaComponent } from './paginas/contraseniaolvidada/contraseniaolvidada.component';
import { HomePageComponent } from './paginas/home-page/home-page.component';
import { PaneldeusuarioComponent } from './paginas/paneldeusuario/paneldeusuario.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home-page',
    pathMatch:'full',
  },
  {
    path:'home-page',
    component:HomePageComponent   

  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'paneldeusuario',
    component:PaneldeusuarioComponent
  },
  {
    path:'Perfil',
    component:PerfilComponent
  },
  {
    path:'contraolvidada',
    component:ContraseniaolvidadaComponent
  }
  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


  
})

export class AppRoutingModule { }
