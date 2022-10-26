const calendar = [
	{
		mes: "Janeiro",
		diaDoMes: "28",
		diaDaSemana: "Quinta-feira",
	},
	{ mes: "Fevereiro", diaDoMes: 25, diaDaSemana: "Quinta-feira" },
	{ mes: "Março", diaDoMes: 29, diaDaSemana: "Segunda-feira" },
	{ mes: "Abril", diaDoMes: 27, diaDaSemana: "Terça-feira" },
	{ mes: "Maio", diaDoMes: 19, diaDaSemana: "Quarta-feira" },
	{ mes: "Junho", diaDoMes: 30, diaDaSemana: "Quarta-feira" },
	{ mes: "Julho", diaDoMes: 23, diaDaSemana: "Sexta-feira" },
	{ mes: "Agosto", diaDoMes: 31, diaDaSemana: "Terça-feira" },
	{ mes: "Setembro", diaDoMes: 20, diaDaSemana: "Segunda-feira" },
	{ mes: "Outubro", diaDoMes: 22, diaDaSemana: "Sexta-feira" },
	{ mes: "Novembro", diaDoMes: 18, diaDaSemana: "Quinta-feira" },
	{ mes: "Dezembro", diaDoMes: 15, diaDaSemana: "Quarta-feira" },
]

const tblCalendario = document.querySelector("#tableCalendario .content")

calendar.forEach((dia) => {
	const row = document.createElement("div")
	row.classList.add("row")
	row.innerHTML += `<span>${dia.mes}</span>`
	row.innerHTML += `<span>${dia.diaDoMes}</span>`
	row.innerHTML += `<span>${dia.diaDaSemana}</span>`

	tblCalendario.appendChild(row)
})
