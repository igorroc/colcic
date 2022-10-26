let button = document.querySelector("#goToTop")

function toggle(display) {
	button.style.display = display
}

window.addEventListener("scroll", function (e) {
	let scrollHeight = window.scrollY

	scrollHeight >= 200
		? button.classList.remove("hide")
		: button.classList.add("hide")
})
