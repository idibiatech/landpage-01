const li = document.querySelectorAll("li");
const loCon = document.querySelector(".location-container");
const mouseIn = () => {
	loCon.classList.add("dark");
};
const mouseOut = () => {
	loCon.classList.remove("dark");
};
li.forEach((tag) => {
	tag.addEventListener("mouseover", mouseIn);
	tag.addEventListener("mouseout", mouseOut);
});
