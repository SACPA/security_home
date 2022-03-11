import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { ContraseniaolvidadaComponent } from './paginas/contraseniaolvidada/contraseniaolvidada.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    PerfilComponent,
    ContraseniaolvidadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


