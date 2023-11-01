let formElement = document.querySelector("#form");
let inputTextElement = document.querySelector("#inputText");
let btnElement = document.querySelector("#generateBtn");

let imgBoxElement = document.querySelector("#qrImgBox");
let qrImgElement = document.querySelector("#qrImg");

formElement.addEventListener("submit", (event) => {
	event.preventDefault();
	let text = inputTextElement.value;

	if (text.trim() !== "") {
		qrImgElement.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
		imgBoxElement.style.display = "flex";

		imgBoxElement.classList.add("animate-in");
		setTimeout(() => {
			imgBoxElement.classList.remove("animate-in");
		}, 1000);
	} else {
		inputTextElement.classList.add("error");
		setTimeout(() => {
			inputTextElement.classList.remove("error");
		}, 1000);
	}
	inputTextElement.value = "";
});
