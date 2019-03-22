import { Injectable } from "@angular/core";
import { Professor } from "./professor";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ProfessorService {
  professores: Observable<any>;

  constructor(private db: AngularFireDatabase) {}

  getProfessorMat(matricula: any): Professor {
    this.professores.forEach(element => {
      if(matricula == element.matricula){
        console.log(element);
      }
    });
    return null;
  }

  insert(professor: Professor) {
    this.db
      .list("professor")
      .push(professor)
      .then((result: any) => {
        console.log(result.key);
      });
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
    return this.db
      .list("professor")
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }


  delete(key: string) {
    this.db.object(`professor/${key}`).remove();
  }
}
