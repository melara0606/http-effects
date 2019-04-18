import { UsuariosModule } from './usuarios/usuarios.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Routas
import { AppRoutingModule } from './app-routing.module';

// Modulos personalizados
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Environment
import { environment } from 'src/environments/environment';

// effects
import { EffectsModule } from '@ngrx/effects';
import { effectsArray } from './stores/effects';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { appReducers } from './stores/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    // efectos
    EffectsModule.forRoot( effectsArray )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
