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
  professor: Professor;
  listPro: Array<Professor>;

  constructor(
    private professorService: ProfessorService,
    private professorDataService: ProfessorDataService
  ) {}

  ngOnInit() {
    this.professores = this.professorService.getAll();
    this.professores.subscribe(data => {
      console.log(data);
      this.listPro = data;
      for (let p of this.listPro) {
        console.log(p);
        if (p.email == data['professor.email']) {
          this.professor = p;
        }
      }
    });
  }

  delete(key: string) {
    this.professorService.delete(key);
  }

  edit(professor: Professor, key: string) {
    this.professorDataService.changeProfessor(professor, key);
  }
}
