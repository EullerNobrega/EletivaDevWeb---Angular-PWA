import { Injectable } from '@angular/core';
import { Disciplina } from './disciplina';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  getMaterias(matricula: any): Disciplina[] {
    throw new Error("Method not implemented.");
  }

  constructor(private db: AngularFireDatabase) { }

  insert(disciplina: Disciplina){
    this.db.list('disciplina').push(disciplina)
    .then((result: any) => {
      console.log(result.key);
    })
  }

  update(disciplina: Disciplina, key: string){
    this.db.list('disciplina').update(key, disciplina)
    .catch((error: any) => {
      console.error(error);
    })
  }

  getAll(){
    return this.db.list('disciplina')
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val( )}));
      })
    );
  }

  delete(key: string){
    this.db.object(`disciplina/${key}`).remove();
  }
}
