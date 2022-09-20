import { Aluno } from "./Aluno"
import { Serie } from './Serie'

export class Escola {
  
  constructor (public nome: string, private cnpj: number, private series: Serie[]) {}

  cadastrarSerie (serie: Serie): Serie {
    if(serie instanceof Serie === false) { 
      throw new Error('Precisa ser uma série válida')
    }
    this.series.push(serie)
    return serie
  }

  matricularAluno (aluno: Aluno, serie: Serie): boolean {
    if(serie instanceof Serie === false || aluno instanceof Aluno === false) { 
      console.log('Precisa ser uma série e aluno válido')
      return false
    }
    const pegaSerie = this.series.find(sala => {
      return sala.nome === serie.nome
    })

    if (!pegaSerie) {
      console.log('Sala inexistente')
      return false
    }

    const pegaDuplicata = pegaSerie.alunos.find(estudante => {
      return estudante.nome === aluno.nome
    })

    if (pegaDuplicata) {
      console.log('Aluno já está matriculado')
      return false
    }

    if (pegaSerie.vagas > pegaSerie.alunos.length) {
      pegaSerie.alunos.push(aluno)
      return true
    }

    console.log('Sala está lotada!')
    return false
  }

  removerAluno (aluno: Aluno , serie: Serie): Aluno {
    if (aluno instanceof Aluno === false || serie instanceof Serie === false) {
      throw new Error('Aluno e Serie precisam ser do tipo correto.')
    }
    const indiceAluno = serie.alunos.indexOf(aluno)
    if (indiceAluno < 0) {
      console.log('Aluno não encontrado')
      return aluno
    }
    serie.alunos.splice(indiceAluno, 1)
    return aluno
  }

  relatorioEscola (): void {
    console.log(this.nome, 'cnpj:', this.cnpj)
    this.series.forEach(serie => {
      console.log(serie)
    })
  }

  relatorioSerie (serie: Serie): undefined {
    if(serie instanceof Serie === false) { 
      console.log('Precisa ser uma série válida')
      return
    }
    const pegaSerie = this.series.find(sala => {
      return sala.nome === serie.nome
    })

    if(pegaSerie) {
      pegaSerie.relatorioClasse()
      return
    }

    console.log('Serie inexistente')
    return
  }

  vagasDisponiveis (): number {
    let vagas: number = 0
    this.series.forEach(serie => {
      vagas = vagas + serie.vagas - serie.alunos.length
    })

    console.log({
      escola: this.nome,
      vagasDisponiveis: vagas
    })
    return vagas
  }
}
