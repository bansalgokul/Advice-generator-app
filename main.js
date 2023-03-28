/** @format */

const API_URL = "https://api.adviceslip.com/advice";

const idnum = document.querySelector(".main__p");
const quote = document.querySelector(".main__q");
const button = document.querySelector(".dice__dice");

const adviceGenerator = async () => {
	const advice = await fetch(API_URL);
	const adviceJSON = await advice.json();
	return adviceJSON.slip;
};

function addQuote(slip) {
	idnum.textContent = `Advice #${slip.id}`;
	quote.textContent = slip.advice;
}

async function addAdvice() {
	const data = await adviceGenerator();
	addQuote(data);
}

button.addEventListener("click", async (event) => {
	addAdvice();
});
