import "./style.scss";
// keep the line above and write your code below.
const exchangeRateEndpoint = "https://currency-ror1.vercel.app/api/currency";
const datesCurrenciesArrayEndpoint = "https://currency-ror1.vercel.app/api/dates-table";
// render dynamic elemnts on dom content loaded
const currencyCodes = {
	USD: "01",
	EUR: "27",
	GBP: "02",
	CAD: "06",
	AUD: "18",
	GPY: "31",
};

/**
 * Use these strings in the form select (drop-down) -
 * you can copy-paste into the HTML
 * and/or use them programmatically
 */

const renderElements = () => {
	const renderForm = () => {
		//render currency selector
		const renderCurrencySelect = (currencyNames: Array<string>) => {
			const createCurrencyOption = (currencyName: string): Element => {
				const option = document.createElement("option");
				option.value = currencyName;
				option.innerText = currencyName;
				return option;
			};
			const selectElement = document.querySelector("#currency-select");
			currencyNames.forEach((name) => selectElement?.appendChild(createCurrencyOption(name)));
		};
		renderCurrencySelect(currencyNames);
	};
	renderForm();
};
const currencyNames = [
	"USD (United States Dollar)",
	"EUR (Euro)",
	"GBP (Great Britain Pound)",
	"CAD (Canadian Dollar)",
	"AUD (Australian Dollar)",
	"GPY (Japanese Yen)",
];

window.addEventListener("DOMContentLoaded", (event) => {
	attachListeners();
	renderElements();
	return populateTable();
});

function attachListeners() {
	const currencyConverterForm = document.getElementById("currency-converter-form");
	if (currencyConverterForm) currencyConverterForm.onsubmit = getExchangeRateFromForm;
}

/**
 * Complete the function below to get the exchange rate from the API
 */

async function getExchangeRateFromApi(dateCode: string, currencyCode: string) {
	const response = await fetch(`${exchangeRateEndpoint}?rdate=${dateCode}&curr=${currencyCode}`);
	const data = await response.json();
	return data;
}

/**
 * Complete the function below to get the data from the form,
 * send it to the API, present the result, and show/hide the spinner.
 * The two event methods prevent the form submission from reloading the page.
 */

async function getExchangeRateFromForm(event: Event) {
	event.preventDefault();
	event.stopPropagation();
	//get date value from form
	const dateElement = document.querySelector("#date-input") as HTMLInputElement;
	const dateValue = dateElement.value;
	//get currency value from form
	const currencyElement = document.querySelector("#currency-select") as HTMLSelectElement;
	const currencyValue = currencyElement.value;
	//remove hiperlink from date value
	const dateCode = dateValue.replace(/-/g, "");
	const exchangeRate = await getExchangeRateFromApi(dateCode, currencyValue);
	console.log(currencyValue);
	//extract
	//set exchange result inner text to exchange rate
	// const exchangeResult: any = document.querySelector("#exchangeresult");
	// if (exchangeResult) exchangeResult.innerText = exchangeRate;
}

/**
 * Complete the function below to get the array of dates and currencies,
 * create table rows, get the exchange rates from the API,
 * present the results, and show/hide the spinner
 */

async function populateTable() {
	return null;
}
