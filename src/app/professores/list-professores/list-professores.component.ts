import { Professor } from "./../shared/professor";
import { Component, OnInit } from "@angular/core";
import { ProfessorDataService } from "../shared/professor-data.service";
import { ProfessorService } from "../shared/professor.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-list-professores",
  templateUrl: "./list-professores.component.html",
  styleUrls: ["./list-professores.component.css"]
})
export class ListProfessoresComponent implements OnInit {
  professores: Observable<any>;

  constructor(
    private professorService: ProfessorService,
    private professorDataService: ProfessorDataService
  ) {}

  ngOnInit() {
    this.professores = this.professorService.getAll();
  }

  delete(key: string) {
    this.professorService.delete(key);
  }

  edit(professor: Professor, key: string) {
    this.professorDataService.changeProfessor(professor, key);
  }
}
