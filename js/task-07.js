const inputFontSize = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');

inputFontSize.addEventListener('input', (event) => {
	const fontValue = inputFontSize.value;
	outputText.style.fontSize = fontValue + 'px';
});