gsap.registerPlugin(ScrollTrigger);

let mobileAnim = gsap.matchMedia();
let pcAnim = gsap.matchMedia();

mobileAnim.add("(max-width: 1000px)", () => {
	let pageLoad = gsap.timeline();
	pageLoad.to(".logo", {
		scale: 1,
		duration: 0.4,
	});
	pageLoad.to(".logo", {
		delay: 0.3,
		y: -70,
		onComplete: function () {
			setTimeout(function () {
				const sections = document.querySelectorAll("section");
				sections.forEach((section) => {
					section.style.display = "flex";
				});
				console.log(sections);
			}, 1000);
		},
	});
	pageLoad.to(".arrow", {
		y: 10,
		opacity: 1,
		repeat: -1,
		duration: 1,
	});
});
pcAnim.add("(min-width: 1001px)", () => {
	let pageLoad = gsap.timeline();
	pageLoad.to(".logo", {
		scale: 1,
		duration: 0.4,
	});
	pageLoad.to(".logo", {
		delay: 0.3,
		y: -70,
		onComplete: function () {
			setTimeout(function () {
				const sections = document.querySelectorAll("section");
				sections.forEach((section) => {
					section.style.display = "flex";
				});
				console.log(sections);
			}, 1000);
		},
	});
	pageLoad.to(".arrow", {
		y: 10,
		opacity: 1,
		repeat: -1,
		duration: 1,
	});
});
