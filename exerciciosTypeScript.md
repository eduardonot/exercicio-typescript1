# Exercício de TypeScript
Sistema de Administração de Escolas Municipais, este sistema deve ter a capacidade de cadastrar escolas e matricular os alunos em sua respectivas séries.
Por se tratar de um sistema crítico, trabalharemos com dados tipados, criando interfaces, enums, tipos de retorno das funcões e métodos, tipagem de parâmetros e atributos.
Deve ser usado TypeScript com classes.

## Modelos
Alunos: Nome, idade, email, gênero
Escola: Nome da escola, séries com período com vagas, cnpj

## Tarefas

- [x] Criar uma escola
- [x] Cadastrar séries com período e vagas
- [x] Matricular aluno na série, período e escola definida pelo aluno
- [x] (X) Relatório com todos alunos matriculados em todas as escolas
- [x] Relatório de alunos matriculados apenas na série e escola selecionada ( Retorno: {vagas: 40})
- [x] Relatório de vagas disponíveis por escola ( Retorno: {vagas: 200})
- [x] (Bônus) Realizar transferência entre escolas.

### Exemplo de resultado esperado (X):
``` 
	Colégio Fernando Maria
		série 1
			Alunos
				Ano Paulo
				Eduarda Vinicius
			Vagas
				17
		série 2
			Alunos
				Thiago Augusto
				Jaime Urico Pacheco
			Vagas
				21
		série 3
			Alunos
				Jair Inácio Gomes
				Ademir Feio
			Vagas
				20

	Instituto de Educação Dedo Cortado
		Colegial 1
			Alunos
				Luiz Bicicletaria
				Valdemir Paulino
				Assis
			Vagas
				94

```