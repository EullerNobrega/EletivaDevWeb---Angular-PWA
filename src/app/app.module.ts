import { HttpClient } from 'selenium-webdriver/http';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { environment } from "../environments/environment";

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";

import { EditDisciplinasComponent } from "./disciplinas/edit-disciplinas/edit-disciplinas.component";
import { ListDisciplinasComponent } from "./disciplinas/list-disciplinas/list-disciplinas.component";
import { EditProfessoresComponent } from "./professores/edit-professores/edit-professores.component";
import { ListProfessoresComponent } from "./professores/list-professores/list-professores.component";
import { AdminComponent } from "./admin/admin.component";
import { ConvidadoComponent } from "./convidado/convidado.component";
import { routing } from "./app.routing";
import { HomeComponent } from './home/home.component';
import { ProfessorDisciplinasComponent } from './professores/professor-disciplinas/professor-disciplinas.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ConvidadoComponent,
    EditDisciplinasComponent,
    ListDisciplinasComponent,
    EditProfessoresComponent,
    ListProfessoresComponent,
    HomeComponent,
    ProfessorDisciplinasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    routing,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
