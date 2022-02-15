const inputFontSize = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

const setFs = () => {
  outputText.style.fontSize = inputFontSize.value + "px";
};
setFs();

inputFontSize.addEventListener("input", (event) => {
  setFs();
});
