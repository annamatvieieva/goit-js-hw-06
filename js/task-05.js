const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener("input", (event) => {
	const text = nameInput.value;
	
	if (text !== '') {
		nameOutput.textContent = text;
	} else {
		nameOutput.textContent = "Anonymous";
	}
})