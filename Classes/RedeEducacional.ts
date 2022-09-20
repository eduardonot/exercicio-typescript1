import { Escola } from '../Classes/Escola'
import { Aluno } from './../Classes/Aluno'
import { Serie } from './../Classes/Serie'

export class RedeEducacional {
  constructor (private cidade: string, private escolas: Escola[]) {}

  cadastrarEscola (escola: Escola): Escola {
    if (escola instanceof Escola === false) {
      throw new Error('Escola deve ser do tipo Escola')
    }
    this.escolas.push(escola)
    return escola
  }

  cadastrarSerie (escola: Escola, serie: Serie) {
    const pegaEscola = this.escolas.find(instituicao => {
      return instituicao.nome === escola.nome
    })
    if (pegaEscola) {
      pegaEscola.cadastrarSerie(serie)
      return
    }
    console.log('Escola não existe')
    return
  }

  matricularAluno (aluno: Aluno, escola: Escola, serie: Serie): Aluno {
    if (aluno instanceof Aluno === false || escola instanceof Escola === false || serie instanceof Serie === false) {
      throw new Error('Aluno, Escola e Serie devem ter tipos corretos.')
    }
    escola.matricularAluno(aluno, serie)
    return aluno
  }

  transferirAluno(aluno: Aluno, escolaMatriculada: Escola, serieMatriculada: Serie, escolaDesejada: Escola, serieDesejada: Serie): Aluno | boolean {
    if (aluno instanceof Aluno === false || escolaDesejada instanceof Escola === false || escolaMatriculada instanceof Escola === false || serieMatriculada instanceof Serie === false || serieDesejada instanceof Serie === false ) {
      throw new Error('Alunos, Series e Escolas devem ser do tipo correto.')
    }
    const podeTransferir = escolaDesejada.matricularAluno(aluno, serieDesejada)
    if (podeTransferir === true) {
      escolaMatriculada.removerAluno(aluno, serieMatriculada)
      return aluno
    }
    console.log('Não foi possível transferir o aluno')
    return false
  }

  relatorioTodasEscolas (): void {
    console.log('Rede Municipal de:', this.cidade)
    this.escolas.forEach(escola => {
      escola.relatorioEscola()
    })
  }

  relatorioSerieEscola (escola: Escola, serie: Serie): Escola {
    if (escola instanceof Escola === false || serie instanceof Serie === false){
      throw new Error('Escola e Serie precisam ser do tipo correto')
    }
    escola.relatorioSerie(serie)
    return escola
  }

  relatorioVagasPorEscola (escola: Escola): Escola {
    if (escola instanceof Escola === false){
      throw new Error('Escola precisa ser do tipo correto')
    }
    escola.vagasDisponiveis()
    return escola
  }
}
