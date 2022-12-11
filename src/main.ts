import './style.scss'
// keep the line above and write your code below.

const exchangeRateForWeekEndpoint = 'http://localhost:3000/api/currency-week';

const currencyCodes = {
  USD: '01',
  EUR: '27',
  GBP: '02',
  CAD: '06',
  AUD: '18',
  GPY: '31',
};

/**
 * Use these strings in the form currency selection (checkboxes) -
 * you can copy-paste into the HTML
 * and/or use them programmatically
 */

const currencyNames = [
  'USD (United States Dollar)',
  'EUR (Euro)',
  'GBP (Great Britain Pound)',
  'CAD (Canadian Dollar)',
  'AUD (Australian Dollar)',
  'GPY (Japanese Yen)'
];

window.addEventListener('DOMContentLoaded', async (event) => {
  attachListeners(

  );
  
  
});

function attachListeners() {
  const currencyInWeekForm = document.getElementById('currency-in-week-form');
  if (currencyInWeekForm) {
    currencyInWeekForm.onsubmit = getExchangeGraphsFromForm;
  }
}

/**
 * Complete the function below to get the exchange rates of a
 * specific currency in a specific week of year from the API
 */


async function getExchangeRatesInWeekFromApi(week: string, year: string, currency: string) {
    fetch(`https://currency-ror1.vercel.app/api/currency-week?rweek=${week}&ryear=${year}&curr=${currency}`)
    .then(response=> {
        return response.json();
          })
          .then(data=> {
        
              return data
            })
          };
            




/**
 * Complete the function below to update a graph with the exchange rates of a
 * specific currency in a specific week of year, that's returned
 * from calling the function getExchangeRatesInWeekFromApi.
 * The function receives the inner graph element, to which the
 * "pending" class is added and removed, and the inner bars represent
 * the currency exchange rate for every day.
 */


async function updateExchangeGraph(graphElem: HTMLElement, week: string, year: string, currency: string) {


}

/**
 * Complete the function below to get the data from the form,
 * send it to the API, present the result, and add/remove the "loading" class.
 * The two event methods prevent the form submission from reloading the page.
 */

function getExchangeGraphsFromForm(event) {
  event.preventDefault();
  event.stopPropagation();


}

/**
 * The following function builds the graph container -
 * everything but the bars that show the data.
 * It receives the string to display as the title,
 * and returns an object with references to the graph container
 * and the inner graph element (whose direct children are the bars)
 */

function createGraphElement(graphTitleText: string) {
  const graphContainer = document.createElement('div');
  graphContainer.classList.add('graph-container');
  const graphTitle = document.createElement('div');
  graphContainer.appendChild(graphTitle);
  graphTitle.classList.add('graph-title');
  graphTitle.textContent = graphTitleText;
  const graphElement = document.createElement('div');
  graphElement.classList.add('graph');
  graphContainer.appendChild(graphElement);
  const graphFooter = document.createElement('div');
  graphContainer.appendChild(graphFooter);
  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].forEach(day => {
    const span = document.createElement('span');
    span.textContent = day;
    span.classList.add('bar-label');
    graphFooter.appendChild(span);
  });

  return { graphContainer, graphElement };
}