import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './paginas/novo-componente/novo-componente.component';
import { NovoComponente2Component } from './paginas/novo-componente2/novo-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent,
    NovoComponente2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
