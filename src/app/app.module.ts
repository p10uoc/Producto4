import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './lista/lista.component';
import { DetalleComponent } from './detalle/detalle.component'

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule
  ],
 // providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
