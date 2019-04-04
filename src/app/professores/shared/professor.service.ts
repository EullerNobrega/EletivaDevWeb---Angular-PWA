import { post } from "selenium-webdriver/http";
import { Injectable } from "@angular/core";
import { Professor } from "./professor";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProfessorService {
  professores: Observable<any>;

  constructor(private db: AngularFireDatabase, private http: HttpClient) {}

  getProfessorMat(matricula: string): Professor {
    return this.http.get<Professor>("localhost:8080/professores/", matricula);
  }

  insert(professor: Professor) {
    this.http.post("localhost:8080/professor", professor);
  }

  update(professor: Professor, key: string) {
    this.db
      .list("professor")
      .update(key, professor)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.http.get<Professor[]>("localhost:8080/professores");
  }

  delete(key: string) {
    this.db.object(`professor/${key}`).remove();
  }
}
