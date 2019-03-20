import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../shared/disciplina';
import { DisciplinaService } from '../shared/disciplina.service';
import { DisciplinaDataService } from '../shared/disciplina-data.service';

@Component({
  selector: 'app-edit-disciplinas',
  templateUrl: './edit-disciplinas.component.html',
  styleUrls: ['./edit-disciplinas.component.css']
})
export class EditDisciplinasComponent implements OnInit {
  disciplina: Disciplina;
  key: string = "";

  constructor(
    private disciplinaService: DisciplinaService,
    private disciplinaDataService: DisciplinaDataService
  ) {}

  ngOnInit() {
    this.disciplina = new Disciplina();
    this.disciplinaDataService.currentDisciplina.subscribe(data => {
      if (data.disciplina && data.key) {
        this.disciplina = new Disciplina();
        this.disciplina.codigo = data.disciplina.codigo;
        this.disciplina.descricao = data.disciplina.descricao;
        this.disciplina.qtdCreditos = data.disciplina.qtdCreditos;
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this.disciplinaService.update(this.disciplina, this.key);
    } else {
      this.disciplinaService.insert(this.disciplina);
    }

    this.disciplina = new Disciplina();
  }
}
