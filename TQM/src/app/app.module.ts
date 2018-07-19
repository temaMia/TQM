import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
//responsive
import {APP_ROUTING} from './app.routes';
import { ServbenComponent } from './components/servben/servben.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MetalicaComponent } from './components/productos/metalica/metalica.component';
import { GrasaLComponent } from './components/productos/grasa-l/grasa-l.component';
import { GrasaCalComponent } from './componets/productos/grasa-cal/grasa-cal.component';
import { GrasasSodioComponent } from './componets/productos/grasas-sodio/grasas-sodio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServbenComponent,
    ProductosComponent,
    MetalicaComponent,
    GrasaLComponent,
    GrasaCalComponent,
    GrasasSodioComponent

  ],
  imports: [
APP_ROUTING,
    BrowserModule,
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
