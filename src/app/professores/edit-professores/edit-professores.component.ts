import { DisciplinaService } from "./../../disciplinas/shared/disciplina.service";
import { Component, OnInit } from "@angular/core";
import { Professor } from "../shared/professor";
import { ProfessorDataService } from "../shared/professor-data.service";
import { ProfessorService } from "../shared/professor.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-edit-professores",
  templateUrl: "./edit-professores.component.html",
  styleUrls: ["./edit-professores.component.css"]
})
export class EditProfessoresComponent implements OnInit {
  professor: Professor;
  key: string = "";
  disciplinas: Observable <any>;

  constructor(
    private professorService: ProfessorService,
    private professorDataService: ProfessorDataService,
    private disciplinaService: DisciplinaService
  ) {}

  ngOnInit() {
    this.disciplinas = this.disciplinaService.getAll();

    this.professor = new Professor();
    this.professorDataService.currentProfessor.subscribe(any => {
      if (any.professor && any.key) {
        this.professor = new Professor();
        this.professor.nome = any.professor.nome;
        this.professor.email = any.professor.email;
        this.professor.matricula = any.professor.matricula;
        this.professor.disciplinas = any.professor.disciplinas;
        this.key = any.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this.professorService.update(this.professor, this.key);
    } else {
      this.professorService.insert(this.professor);
    }

    this.professor = new Professor();
  }
}
