// "use strict";

// add events on multiple element

const addEventOnElement = function (elements, eventType, callback) {
	for (let i = 0, len = elements.length; i < len; i++) {
		elements[i].addEventListener(eventType, callback);
	}
};

// navbar

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
	navbar.classList.toggle("active");
	navToggleBtn.classList.toggle("active");
	overlay.classList.toggle("active");
	document.body.classList.toggle("nav-active");
};
addEventOnElement([navToggleBtn, overlay], "click", toggleNavbar);

// parallex effect

const parallexElements = document.querySelectorAll("[data-parallax]");

window.addEventListener("mousemove", (event) => {
	for (let i = 0, len = parallexElements.length; i < len; i++) {
		const movementX =
			(event.clientX / window.innerWidth) *
			Number(parallexElements[i].dataset.parallaxSpeed);
		const movmentY =
			(event.clientY / window.innerHeight) *
			Number(parallexElements[i].dataset.parallaxSpeed);

		parallexElements[i].animate(
			{
				transform: `translate(${movementX}px, ${movmentY}px)`,
			},
			{ duration: 500, fill: "forwards" }
		);
	}
});
