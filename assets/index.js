const boxes = document.querySelectorAll(".box");

const checkBoxes = () => {
	const triggerBottomPoint = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		const boxTopPoint = box.getBoundingClientRect().top;

		if (boxTopPoint < triggerBottomPoint) {
			box.classList.add("show");
		} else {
			box.classList.remove("show");
		}
	});
};

checkBoxes();

window.addEventListener("scroll", checkBoxes);
