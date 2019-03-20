import { Disciplina } from 'src/app/disciplinas/shared/disciplina';

export class Professor {
    matricula : string = '';
    nome : string = '';
    email : string = '';
    disciplinas: Disciplina[] = [];
}
