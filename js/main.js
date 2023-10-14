// window.onload = function () {

// };

let mobileAnim = gsap.matchMedia();
let pcAnim = gsap.matchMedia();
gsap.registerPlugin(ScrollTrigger);

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
			}, 1000);
		},
	});
	pageLoad.to(".arrow", {
		y: 10,
		opacity: 1,
		repeat: -1,
		duration: 1,
	});

	gsap.from("p", {
		scrollTrigger: {
			trigger: ".sec-1",
			start: "top center",
		},
		x: "100%",
		duration: 0.4,
		stagger: 0.4,
		ease: "power3.out",
	});
});
// let sec = gsap.timeline();
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
			}, 1000);
		},
	});
	pageLoad.to(".arrow", {
		y: 10,
		opacity: 1,
		repeat: -1,
		duration: 1,
	});

	gsap.from("p", {
		scrollTrigger: {
			trigger: ".sec-1",
			start: "top center",
		},
		y: 100,
		duration: 0.4,
		stagger: 0.4,
	});
});

gsap.from(".location", {
	scrollTrigger: {
		trigger: ".locations",
		start: "top 80%",
	},
	y: -100,
	opacity: 0,
	duration: 4,
	stagger: 1,
	// ease: "power3.out",
});
