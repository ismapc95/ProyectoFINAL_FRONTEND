import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorietasComponent } from './historietas/historietas.component';
import { CosasComponent } from './cosas/cosas.component';
import { ColegasComponent } from './colegas/colegas.component';
import { EventosComponent } from './eventos/eventos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DecirAlgoComponent } from './decir-algo/decir-algo.component';
import { MisHistorietasComponent } from './mis-historietas/mis-historietas.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { MisColeguillasComponent } from './mis-coleguillas/mis-coleguillas.component';
import { InfoSiColeguillaComponent } from './info-si-coleguilla/info-si-coleguilla.component';
import { LoginUserService } from './menu/loginUserService.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HistorietasComponent,
    CosasComponent,
    ColegasComponent,
    EventosComponent,
    PageNotFoundComponent,
    MenuComponent,
    FooterComponent,
    DecirAlgoComponent,
    MisHistorietasComponent,
    DatosPersonalesComponent,
    MisColeguillasComponent,
    InfoSiColeguillaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    routing
  ],
  providers: [LoginUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
