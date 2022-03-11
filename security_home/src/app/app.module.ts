import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent } from './paginas/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { PerfilComponent } from './paginas/perfil/perfil.component';
import { ContraseniaolvidadaComponent } from './paginas/contraseniaolvidada/contraseniaolvidada.component';
import { LayoutComponent } from './layout/layout/layout.component';

@NgModule({
  declarations: [
    HomePageComponent,
    AppComponent,
    RegistroComponent,
    PerfilComponent,
    ContraseniaolvidadaComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


