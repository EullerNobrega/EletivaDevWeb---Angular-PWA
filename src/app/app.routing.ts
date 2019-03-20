import { ProfessorDisciplinasComponent } from './professores/professor-disciplinas/professor-disciplinas.component';
import { HomeComponent } from "./home/home.component";
import { ListDisciplinasComponent } from "./disciplinas/list-disciplinas/list-disciplinas.component";
import { EditDisciplinasComponent } from "./disciplinas/edit-disciplinas/edit-disciplinas.component";
import { EditProfessoresComponent } from "./professores/edit-professores/edit-professores.component";
import { Routes, RouterModule } from "@angular/router";
import { ConvidadoComponent } from "./convidado/convidado.component";
import { AdminComponent } from "./admin/admin.component";
import { ModuleWithProviders } from "@angular/core";
import { ListProfessoresComponent } from "./professores/list-professores/list-professores.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "convidado", component: ConvidadoComponent },
  { path: "editProfessores", component: EditProfessoresComponent },
  { path: "editDisciplinas", component: EditDisciplinasComponent },
  { path: "listDisciplinas", component: ListDisciplinasComponent },
  { path: "listProfessores", component: ListProfessoresComponent},
  { path: "listProfessores/:email", component: ProfessorDisciplinasComponent},

  // otherwise redirect to home
  { path: "**", redirectTo: "" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
