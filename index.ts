import { Generos } from "./enums/Generos"
import { Aluno } from "./Classes/Aluno"
import { Serie } from "./Classes/Serie"
import { Escola } from "./Classes/Escola"
import { RedeEducacional } from "./Classes/RedeEducacional"

const pirassununga = new RedeEducacional('Pirassununga', [])

const iranRodrigues = new Escola('Iran Rodrigues', 111, [])
const reneAlbers = new Escola('Rene Albers', 222, [])

const primeiroAno = new Serie('Primeiro Ano', 25, [])
const segundoAno = new Serie('Segundo Ano', 10, [])
const terceiroAno = new Serie('Terceiro Ano', 15, [])

const ana = new Aluno('Ana Paula', 'Ana@ana.com', Generos.fem)
const eduardo = new Aluno('Eduardo', 'edu@edu.com', Generos.masc)
const thiago = new Aluno('Thiago', 'thi@thi.com', Generos.masc)
const raissa = new Aluno('Raissa', 'raissa@gmail.com', Generos.fem)
const adriana = new Aluno('Adriana', 'adri@ana.com', Generos.fem)
const antonia = new Aluno('Antonia', 'ant@nia.com', Generos.fem)
const luanda = new Aluno('Luanda', 'luanda@.com', Generos.fem)
const nicolas = new Aluno('Nicolas', 'nicolas@nicolas.com', Generos.masc)
const priscilla = new Aluno('Priscilla', 'prisc@pri', Generos.fem)
const fernando = new Aluno('Luiz Fernando', 'lfmalf@gmail.com', Generos.masc)
const otavio = new Aluno('Otavio', 'otavio@nenem.com', Generos.masc)
const giovani = new Aluno('Giovani', 'giovani@gio.com', Generos.masc)
const alaide = new Aluno('Alaide', 'laidao@gmail.com', Generos.fem)
const yasmilli = new Aluno('Yasmilli', 'yas@milli', Generos.fem)

pirassununga.cadastrarEscola(iranRodrigues)
pirassununga.cadastrarEscola(reneAlbers)

pirassununga.cadastrarSerie(iranRodrigues, primeiroAno)
pirassununga.cadastrarSerie(reneAlbers, segundoAno)
pirassununga.cadastrarSerie(reneAlbers, terceiroAno)

pirassununga.matricularAluno(ana, reneAlbers, segundoAno)
pirassununga.matricularAluno(thiago, reneAlbers, segundoAno)
pirassununga.matricularAluno(adriana, reneAlbers, segundoAno)
pirassununga.matricularAluno(luanda, reneAlbers, segundoAno)
pirassununga.matricularAluno(priscilla, reneAlbers, segundoAno)
pirassununga.matricularAluno(fernando, reneAlbers, segundoAno)
pirassununga.matricularAluno(alaide, reneAlbers, segundoAno)
pirassununga.matricularAluno(eduardo, iranRodrigues, primeiroAno)
pirassununga.matricularAluno(raissa, iranRodrigues, primeiroAno)
pirassununga.matricularAluno(antonia, iranRodrigues, primeiroAno)
pirassununga.matricularAluno(nicolas, iranRodrigues, primeiroAno)
pirassununga.matricularAluno(otavio, iranRodrigues, primeiroAno)
pirassununga.matricularAluno(giovani, iranRodrigues, primeiroAno)
pirassununga.matricularAluno(yasmilli, iranRodrigues, primeiroAno)

pirassununga.transferirAluno(ana,reneAlbers,segundoAno, iranRodrigues, primeiroAno)
pirassununga.transferirAluno(raissa, iranRodrigues, primeiroAno, reneAlbers, terceiroAno)

// RELATORIO COM TODOS OS ALUNOS MATRICULADOS EM TODAS AS ESCOLAS
pirassununga.relatorioTodasEscolas()

// RELATORIO DE ALUNOS MATRICULADOS APENAS NA SERIE E ESCOLA SELECIONADA
pirassununga.relatorioSerieEscola(iranRodrigues, primeiroAno)

// RELATORIO DE VAGAS DISPONIVEIS POR ESCOLA
pirassununga.relatorioVagasPorEscola(reneAlbers)