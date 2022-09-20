import { Aluno } from "./Aluno"

export class Serie {
  constructor (public nome: string, public vagas: number, public alunos: Aluno[]) {
    if (this.alunos.length > this.vagas) {throw new Error('Quantidade de alunos maior que de vagas.')}
  }

  relatorioClasse () {
    console.log({ 
      nome: this.nome,
      vagas: this.vagas, 
      vagasRestantes: this.vagas - this.alunos.length,
      alunos: this.alunos
    })
  }
}
