let scrollingTo = ""
let lastScrollTop = 0

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add("appearScrollAnimation")
		} else {
			if (scrollingTo === "top") {
				entry.target.classList.remove("appearScrollAnimation")
			}
		}
	})
})

const elementsToAnimate = document.querySelectorAll(".scrollAnimation")

elementsToAnimate.forEach((element) => {
	observer.observe(element)
})

window.onscroll = (ev) => {
	let st = window.pageYOffset || document.documentElement.scrollTop
	if (st > lastScrollTop) {
		// downscroll code
		scrollingTo = "bottom"
	} else {
		// upscroll code
		scrollingTo = "top"
	}
	lastScrollTop = st <= 0 ? 0 : st // For Mobile or negative scrolling
}
