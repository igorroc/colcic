const semestres = [
	{
		title: "1º Semestre",
		lista: [
			"Cálculo Aplicado I",
			"Física para Ciência da Computação",
			"Inglês Instrumental",
			"Introdução à Ciência da Computação",
			"Linguagem de Programação I",
			"Lógica para Computação",
			"Metodologia da Pesquisa Científica",
		],
	},
	{
		title: "2º Semestre",
		lista: [
			"Álgebra e Geometria Analítica",
			"Cálculo Aplicado II",
			"Eletrônica",
			"Fundamentos Matemáticos para Ciência da Computação",
			"Linguagem de Programação II",
			"Lógica Digital I",
		],
	},
	{
		title: "3º Semestre",
		lista: [
			"Álgebra Abstrata",
			"Cálculo Aplicado III",
			"Estrutura de Dados",
			"Fundamentos da Economia",
			"Linguagem de Programação III",
			"Lógica Digital II",
		],
	},
	{
		title: "4º Semestre",
		lista: [
			"Análise de Sistemas de Informação",
			"Computação Gráfica",
			"Direito e Legislação",
			"Organização e Arquitetura dos Computadores",
			"Organização e Recuperação da Informação",
			"Probabilidade e Estatística",
			"Projeto e Análise de Algoritmos",
		],
	},
	{
		title: "5º Semestre",
		lista: [
			"Análise Numérica",
			"Banco de Dados I",
			"Conceitos e Linguagens de Programação",
			"Inteligência Artificial",
			"Sistemas Operacionais",
			"Software Básico",
			"Teoria da Computação",
		],
	},
	{
		title: "6º Semestre",
		lista: [
			"Administração para Computação",
			"Banco de Dados II",
			"Compiladores",
			"Interfaces Homem-Máquina",
			"Redes de Computadores I",
		],
	},
	{
		title: "7º Semestre",
		lista: [
			"Empreendedor em Informática",
			"Engenharia de Software",
			"Redes de Computadores II",
			"Sistemas Distribuídos",
			"Tecnologia e Sociedade",
		],
	},
	{
		title: "Optativas",
		lista: [
			"Administração e Segurança de Redes",
			"Aquisição de Conhecimento",
			"Banco de Dados Orientado a Objetos",
			"Computação Bioinspirada",
			"Computação Quântica",
			"Controle de Sistemas Tecnologias e Dispositivos",
			"Dinâmica de Sistemas",
			"Introdução a Bioinformática",
			"Introdução a Pesquisa Operacional",
			"Laboratório e Organização de Computadores",
			"Processamento de Imagens",
			"Processamento Paralelo",
			"Sistemas Especialistas",
			"Tecnologia de Redes a Grandes Distâncias",
			"Tecnologia e Educação",
			"Tópicos Avançados em Algoritmos",
			"Tópicos Avançados em Computação I",
			"Tópicos Avançados em Computação II",
			"Dispositivos Móveis",
			"Qualidade, Processos e Gestão de Software",
			"Criptografia",
			"C Avançado",
		],
	},
]

const lista = document.querySelector("#listaSemestres")

semestres.forEach((semestre) => {
	const card = document.createElement("div")
    card.classList.add("card")
	card.innerHTML = `<h2>${semestre.title}</h2>`
    
	const ul = document.createElement("ul")
	semestre.lista.forEach((disciplina) => {
		const li = document.createElement("li")
		li.innerHTML = disciplina
		ul.appendChild(li)
	})

    if(semestre.title === "Optativas"){
        const divBreak = document.createElement("div")
        divBreak.classList.add("break")
        lista.appendChild(divBreak)
    }
    
	card.appendChild(ul)
	lista.appendChild(card)
})
