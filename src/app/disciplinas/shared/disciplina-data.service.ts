import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Disciplina } from './disciplina';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaDataService {
  private disciplinaSource = new BehaviorSubject({ disciplina: null, key: '' });
  currentDisciplina = this.disciplinaSource.asObservable();

  constructor() { }

  changeDisciplina(disciplina: Disciplina, key: string){
    this.disciplinaSource.next({ disciplina: Disciplina, key: key});
  }
}
