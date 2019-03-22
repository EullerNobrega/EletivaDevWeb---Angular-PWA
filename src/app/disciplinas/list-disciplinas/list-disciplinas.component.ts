import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DisciplinaService } from '../shared/disciplina.service';
import { DisciplinaDataService } from '../shared/disciplina-data.service';
import { Disciplina } from '../shared/disciplina';

@Component({
  selector: 'app-list-disciplinas',
  templateUrl: './list-disciplinas.component.html',
  styleUrls: ['./list-disciplinas.component.css']
})
export class ListDisciplinasComponent implements OnInit {
  disciplinasObs: Observable<any>;

  constructor(private disciplinaService: DisciplinaService, private disciplinaDataService: DisciplinaDataService) { }

  ngOnInit() {
    this.disciplinasObs = this.disciplinaService.getAll();
   

  }

  delete(key: string){
    this.disciplinaService.delete(key);
  }

  edit(disciplina: Disciplina, key: string){
    this.disciplinaDataService.changeDisciplina(disciplina, key);
  }

}
