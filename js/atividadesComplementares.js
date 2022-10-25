const atividades = [
	{
		type: "Participação",
		title: "Centro Acadêmico de Ciência da Computação da UESC - <b>CACIC</b>",
		description:
			"Nos seguintes cargos: coordenador geral, membros da comissão de assuntos acadêmicos, membros da comissão de eventos, secretária e tesoureiro: 50 horas/ano, não podendo exceder o total de 100 horas.",
	},
	{
		type: "Participação",
		title: "Empresa Júnior de Ciência da Computação - <b>TecnoJr</b>",
		description:
			"Nos seguintes cargos: presidente, conselheiro, diretor ou trainee: 50 horas/ano",
	},
	{
		type: "Participação",
		title: "Semana de Informática da UESC - <b>SINFORM</b>",
		description: "Nas atividades de apoio ao evento (alunos não-CACIC): 30 horas/evento"
	},
	{
		type: "Participação",
		title: "Semana de Informática da UESC - <b>SINFORM</b>",
		description: "Na atividade de instrutor de Minicursos à comunidade: 30 horas/minicurso"
	},
	{
		type: "Manutenção",
		title: "não remunerada de Laboratórios da Computação",
		description: "30 horas/semestre"
	},
	{
		type: "Participação",
		title: "Eventos científicos relacionados à Computação",
		description: "Máximo 80 horas"
	},
	{
		type: "Participação",
		title: "Orientando em Projeto de Iniciação Cientifica",
		description: "50 horas/projeto"
	},
	{
		type: "Participação",
		title: "Projetos de Extensão",
		description: "50 horas/projeto"
	},
	{
		type: "Atividades",
		title: "Voluntárias ligadas a Computação",
		description: "Máximo de 50 horas/ano"
	},
	{
		type: "Atividades",
		title: "Especiais apreciadas e aprovadas pelo Colegiado",
		description: "Máximo de 50 horas/ano/atividade"
	},
	{
		type: "Atividades",
		title: "Monitoria na UESC",
		description: "Máximo de 80 horas"
	},
	{
		type: "Atividades",
		title: "Estágio não curricular",
		description: "Máximo de 80 horas"
	},
]

const lista = document.querySelector("#listaAtividades")

atividades.forEach((atv) => {
	const card = document.createElement("div")
	card.classList.add("card")
	card.innerHTML += `<img src="../assets/lab/pc.png"/>`
	card.innerHTML += `<h2>${atv.type}</h2>`
	card.innerHTML += `<p>${atv.title}</p>`
	card.innerHTML += `<div class="description"><p>${atv.description}</p></div>`

	lista.appendChild(card)
})
