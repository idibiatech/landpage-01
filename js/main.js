// window.onload = function () {

// };

let mobileAnim = gsap.matchMedia();
let pcAnim = gsap.matchMedia();
gsap.registerPlugin(ScrollTrigger);

gsap.from(".location", {
	scrollTrigger: {
		trigger: ".locations",
		start: "top 80%",
	},
	y: -100,
	opacity: 0,
	duration: 1,
	stagger: 1,
	ease: "power3.out",
});
mobileAnim.add("(max-width: 1000px)", () => {
	let pageLoad = gsap.timeline();
	pageLoad.to(".logo-img", {
		scale: 1,
		duration: 1,
		ease: "back.out(1.7)",
	});
	pageLoad.to(".logo-img", {
		delay: 0.3,
		y: -70,
		ease: "power4.out",
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
		ease: "back.out(1.7)",
	});

	gsap.from("p", {
		scrollTrigger: {
			trigger: ".sec-1",
			start: "top center",
		},
		x: "110%",
		duration: 0.4,
		stagger: 0.4,
		ease: "back.out(1.7)",
	});
});
// let sec = gsap.timeline();
pcAnim.add("(min-width: 1001px)", () => {
	let pageLoad = gsap.timeline();
	pageLoad.to(".logo-img", {
		scale: 1,
		duration: 1,
		ease: "back.out(1.7)",
	});
	pageLoad.to(".logo-img", {
		delay: 0.3,
		y: -100,
		ease: "power4.out",
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
		ease: "back.out(1.7)",
	});

	gsap.from("p", {
		scrollTrigger: {
			trigger: ".sec-1",
			start: "top center",
		},
		y: 100,
		duration: 0.4,
		stagger: 0.4,
		ease: "back.out(1.7)",
	});
});
