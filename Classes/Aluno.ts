import { Generos } from "../enums/Generos";

export class Aluno {
  constructor (public nome: string, public email: string, public genero: Generos) {}
}