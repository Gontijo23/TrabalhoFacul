import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sharepage/sidebar/sidebar.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { SeusIngressosComponent } from './pages/seus-ingressos/seus-ingressos.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { HttpClientModule  } from '@angular/common/http';
import { ContaComponent } from './pages/conta/conta.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
	  SobreComponent,
	  SeusIngressosComponent,
    FavoritosComponent,
    ContaComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
