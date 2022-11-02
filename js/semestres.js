const semestres = [
	{
		title: "1º Semestre",
		lista: [
			{
				name: "Cálculo Aplicado I",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/1/Calculo_aplicado_I.pdf",
			},
			{
				name: "Física para Ciência da Computação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/1/Fisica_para_computacao.pdf",
			},
			{
				name: "Inglês Instrumental",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/1/Ingles_instrumental.pdf",
			},
			{
				name: "Introdução à Ciência da Computação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/1/Introducao_a_ciencia_da_computacao.pdf",
			},
			{
				name: "Linguagem de Programação I",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/1/Linguagem_de_programacao_I.pdf",
			},
			{
				name: "Lógica para Computação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/1/Logica_para_computacao.pdf",
			},
			{
				name: "Metodologia da Pesquisa Científica",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/1/Metodologia_da_pesquisa_cientifica.pdf",
			},
		],
	},
	{
		title: "2º Semestre",
		lista: [
			{
				name: "Álgebra e Geometria Analítica",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/2/Algebra_e_geometria_analitica.pdf",
			},
			{
				name: "Cálculo Aplicado II",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/2/Calculo_A_II.pdf",
			},
			{
				name: "Eletrônica",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/2/Eletronica.pdf",
			},
			{
				name: "Fundamentos Matemáticos para Ciência da Computação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/2/Fundamentos_matematicos_para_computacao.pdf",
			},
			{
				name: "Linguagem de Programação II",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/2/Linguagem_de_programacao_II.pdf",
			},
			{
				name: "Lógica Digital I",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/2/Logica_digital_I.pdf",
			},
		],
	},
	{
		title: "3º Semestre",
		lista: [
			{
				name: "Álgebra Abstrata",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/3/Algebra_abstrata.pdf",
			},
			{
				name: "Cálculo Aplicado III",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/3/Calculo_aplicado_III.pdf",
			},
			{
				name: "Estrutura de Dados",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/3/Estrutura_de_dados.pdf",
			},
			{
				name: "Fundamentos da Economia",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/3/Fundamentos_de_economia.pdf",
			},
			{
				name: "Linguagem de Programação III",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/3/Linguagem_de_programacao_III.pdf",
			},
			{
				name: "Lógica Digital II",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/3/Logica_digital_II.pdf",
			},
		],
	},
	{
		title: "4º Semestre",
		lista: [
			{
				name: "Análise de Sistemas de Informação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/4/Analise_dos_sistemas_de_informacao.pdf",
			},
			{
				name: "Computação Gráfica",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/4/Computacao_grafica.pdf",
			},
			{
				name: "Direito e Legislação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/4/Direito_e_legislacao.pdf",
			},
			{
				name: "Organização e Arquitetura dos Computadores",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/4/organizacao_e_arquitetura_dos_computadores.pdf",
			},
			{
				name: "Organização e Recuperação da Informação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/4/Organizacao_e_recuperacao_da_informacao.pdf",
			},
			{
				name: "Probabilidade e Estatística",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/4/Probabilidade_e_estatistica.pdf",
			},
			{
				name: "Projeto e Análise de Algoritmos",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/4/Projeto_e_analise_de_algoritmos.pdf",
			},
		],
	},
	{
		title: "5º Semestre",
		lista: [
			{
				name: "Análise Numérica",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/5/Analise_numerica.pdf",
			},
			{
				name: "Banco de Dados I",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/5/Banco_de_dados_I.pdf",
			},
			{
				name: "Conceitos e Linguagens de Programação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/5/Conceitos_de_linguagens_de_programacao.pdf",
			},
			{
				name: "Inteligência Artificial",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/5/Inteligencia_artificial.pdf",
			},
			{
				name: "Sistemas Operacionais",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/5/Sistemas_operacionais.pdf",
			},
			{
				name: "Software Básico",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/5/Software_Basico.pdf",
			},
			{
				name: "Teoria da Computação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/5/Teoria_da_computacao.pdf",
			},
		],
	},
	{
		title: "6º Semestre",
		lista: [
			{
				name: "Administração para Computação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/6/Administracao_para_computacao.pdf",
			},
			{
				name: "Banco de Dados II",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/6/Banco_de_dados_II.pdf",
			},
			{
				name: "Compiladores",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/6/Compiladores.pdf",
			},
			{
				name: "Interfaces Homem-Máquina",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/6/Interfaces_Homem_Mquina.pdf",
			},
			{
				name: "Redes de Computadores I",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/6/Redes_de_computadores_I.pdf",
			},
		],
	},
	{
		title: "7º Semestre",
		lista: [
			{
				name: "Empreendedor em Informática",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/7/Empreendedor_em_informatica.pdf",
			},
			{
				name: "Engenharia de Software",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/7/Engenharia_Software.pdf",
			},
			{
				name: "Redes de Computadores II",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/7/Redes_computadores_II.pdf",
			},
			{
				name: "Sistemas Distribuídos",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/7/Sistemas_distribuidos.pdf",
			},
			{
				name: "Tecnologia e Sociedade",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/7/Tecnologia_e_sociedade.pdf",
			},
		],
	},
	{
		title: "Optativas",
		lista: [
			{
				name: "Administração e Segurança de Redes",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Administracao_e_seguranca_de_redes.pdf",
			},
			{
				name: "Aquisição de Conhecimento",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Aquisicao_conhecimento.pdf",
			},
			{
				name: "Banco de Dados Orientado a Objetos",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Banco_de_dados_orientado_a_objetos.pdf",
			},
			{
				name: "Computação Bioinspirada",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Computacao_bioinspirada.pdf",
			},
			{
				name: "Computação Quântica",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Computacao_quantica.pdf",
			},
			{
				name: "Controle de Sistemas Tecnologias e Dispositivos",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Controle_de_sistemas_tecnologias_e_dispositivos.pdf",
			},
			{
				name: "Dinâmica de Sistemas",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Dinamica_dos_sistemas.pdf",
			},
			{
				name: "Introdução a Bioinformática",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Introducao_a_bioinformatica.pdf",
			},
			{
				name: "Introdução a Pesquisa Operacional",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Introducao_a_pesquisa_operacional.pdf",
			},
			{
				name: "Laboratório e Organização de Computadores",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/laboratorio_e_organizacao_de_computadores.pdf",
			},
			{
				name: "Processamento de Imagens",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Processamento_de_imagens.pdf",
			},
			{
				name: "Processamento Paralelo",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Processamento_paralelo.pdf",
			},
			{
				name: "Sistemas Especialistas",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Sistemas_especialistas.pdf",
			},
			{
				name: "Tecnologia de Redes a Grandes Distâncias",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Tecnologia_de_redes_a_grandes_distancias.pdf",
			},
			{
				name: "Tecnologia e Educação",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Tecnologia_e_educacao.pdf",
			},
			{
				name: "Tópicos Avançados em Algoritmos",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Topicos_avancados_em_algoritmos.pdf",
			},
			{
				name: "Tópicos Avançados em Computação I",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Topicos_avancados_em_computacao_I.pdf",
			},
			{
				name: "Tópicos Avançados em Computação II",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Topicos_avancados_em_computacao_II.pdf",
			},
			{
				name: "Dispositivos Móveis",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/tacII_dispositivosMoveis_profJorge.pdf",
			},
			{
				name: "Qualidade, Processos e Gestão de Software",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/Proposta_Qualidade_Processos_GestaoSw_profAlfredo.pdf",
			},
			{
				name: "Criptografia",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/CET111-TACI-Criptografia-programaDisciplina.pdf",
			},
			{
				name: "C Avançado",
				link: "http://nbcgib.uesc.br/colcic/document/ementas/OP/C%20Avanado%20Programa.pdf",
			},
		],
	},
]

const lista = document.querySelector("#listaSemestres")

semestres.forEach((semestre, index) => {
	const card = document.createElement("div")
	card.classList.add("card", "scrollAnimation")
	card.style.transitionDelay = `${index * 100}ms`
	card.innerHTML = `<h2>${semestre.title}</h2>`

	const ul = document.createElement("ul")
	semestre.lista.forEach((disciplina) => {
		const link = document.createElement("a")
		const span = document.createElement("span")

		span.innerHTML = disciplina.name
		link.appendChild(span)

		if (disciplina.link !== undefined) {
			const icon = document.createElement("iconify-icon")
			icon.setAttribute("icon", "akar-icons:download")
			link.appendChild(icon)
			link.href = disciplina.link
			link.target = "_blank"
		}

		ul.appendChild(link)
	})

	if (semestre.title === "Optativas") {
		const divBreak = document.createElement("div")
		divBreak.classList.add("break")
		lista.appendChild(divBreak)
	}

	card.appendChild(ul)
	lista.appendChild(card)
})
