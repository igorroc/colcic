document.addEventListener("mousemove", function (ev) {
    let e = ev || window.event;
	let tooltips = document.querySelectorAll(".tooltipMouse")
	let mouseX = e.clientX
	let mouseY = e.clientY
    let scroll = window.scrollY
	tooltips.forEach((tooltip) => {
		tooltip.style.setProperty("--mouseX", `${mouseX}px`)
		tooltip.style.setProperty("--mouseY", `${mouseY + scroll}px`)
	})
})
