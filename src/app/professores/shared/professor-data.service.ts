import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Professor } from './professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorDataService {
  private professorSource = new BehaviorSubject({ professor: null, key: '' });
  currentProfessor = this.professorSource.asObservable().subscribe();

  constructor() { }

  changeProfessor(professor: Professor, key: string){
    this.professorSource.next({ professor: Professor, key: key});
  }
}
