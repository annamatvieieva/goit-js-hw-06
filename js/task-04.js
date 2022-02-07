const decrement = document.querySelector("[decrement]");
const increment = document.querySelector("[increment]");
let counterValue = document.querySelector("#value");

decrement.addEventListener("click", (event) => {
	counterValue -= 1;
})
increment.addEventListener("click", (event) => {
	counterValue += 1;
})


