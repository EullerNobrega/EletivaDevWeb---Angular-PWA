import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { Professor } from "./../shared/professor";
import { Component, OnInit } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { ProfessorService } from "../shared/professor.service";

@Component({
  selector: "app-professor-disciplinas",
  templateUrl: "./professor-disciplinas.component.html",
  styleUrls: ["./professor-disciplinas.component.css"]
})
export class ProfessorDisciplinasComponent implements OnInit {
  professor: Professor = new Professor();
  professores: Array<Professor>;
  professoresObs: Observable<any>;
  profMat: string;
  sub: Subscription;

  constructor(
    private professorService: ProfessorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.professoresObs = this.professorService.getAll();
    this.professoresObs.subscribe(res => {
      this.professores = res;
      this.professor = this.professores.find(element => {
          return element.matricula === this.profMat;
      }
      );
    });

    this.sub = this.route.params.subscribe(params => {
      this.profMat = params['professor.matricula'];
    });
  }

}
