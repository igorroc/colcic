const softwares = [
	{
		img: "../assets/softwares/cx.png",
		nome: "Embarcadero C++ Builder",
		descricao:
			"IDE para desenvolvimento no ambiente Windows, Android, IOS. Codificação, depuração, teste e design para implantação em desktops e plataformas móveis.",
	},
	{
		img: "../assets/softwares/cx.png",
		nome: "Embarcadero Delphi Builder",
		descricao:
			"IDE com linguagem object pascal para desenvolvimento Windows, Android, IOS, Linux. Inclui bibliotecas para desenvolvimento rápido com banco de dados para web, desktop, mobile, aplicações híbridas.",
	},
	{
		img: "../assets/softwares/oracle_database.png",
		nome: "Oracle Database, Big Data, BI",
		descricao:
			"Experiência prática com diversas ferramentas para gerenciamento de dados e serviços da nuvem, bancos de dados, data warehousing e data analytics. Banco de Dados Oracle, MySQL, NoSQL, Cloud Service",
	},
	{
		img: "../assets/softwares/oracle_java.png",
		nome: "Oracle Java",
		descricao:
			"Ferramentas para desenvolvimento e serviço para IoT, Data mining, Machine learning, microservice",
	},
	{
		img: "../assets/softwares/rx.png",
		nome: "Embarcadero RAD Studio",
		descricao:
			"IDE de propósito geral para programação de aplicação para ambientes windows, linux, android, IOS, usando C++ e object pascal. ",
	},
	{
		img: "../assets/softwares/rsx.png",
		nome: "Embarcadero RAD Server",
		descricao:
			"Servidor de aplicativos para ambientes de aplicações windows, plataformas web e mobile híbridos, de aplicativos Delphi e C++Builder, em REST/JSON e IoT, semelhante ao Apache e IIS.",
	},
	{
		img: "../assets/softwares/interbase.png",
		nome: "Embarcadero InterBase",
		descricao:
			"Gerenciador para Banco de dados SQL, escalável, utilizável em ambientes Windows, Linux, macOS, iOS and Android.",
	},
	{
		img: "../assets/softwares/intel.png",
		nome: "Intel System Studio",
		descricao:
			"IDE para próposito geral com linguagens C e C++, para programação de aplicações para plataformas desktop, mobile nativa Android e híbrida, web. Com aplicação em OpenCL, IoT, processamento gráfico.",
	},
]

const lista = document.querySelector("#listaSoftwares")

softwares.forEach((soft) => {
	const card = document.createElement("div")
	card.classList.add("card")
	card.innerHTML += `<img src="${soft.img}"/>`
	card.innerHTML += `<h2>${soft.nome}</h2>`
	card.innerHTML += `<p>${soft.descricao}</p>`

	lista.appendChild(card)
})
