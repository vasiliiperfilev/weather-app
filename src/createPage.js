import dataFetcher from './dataFetcher';
import renderDOM from './renderDOM';
import currentState from './currentState';
import renderForecast from './renderForecast';

function changeForecast() {
  currentState.setForecastFrequency(this.textContent.toLowerCase());
  const forecast = renderForecast(currentState.getData()[currentState.getForecastFrequency()]);
  const div = document.querySelector('.forecast');
  div.innerHTML = '';
  div.append(forecast);
}

async function createPage(city = 'Coquitlam') {
  const data = await dataFetcher.getWeatherDataSafe(city);
  document.querySelector('body').append(renderDOM({ city, ...data }));
  document.querySelector('.search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const newCity = document.querySelector('#city').value;
    currentState.setCity(newCity);
    createPage(newCity);
  });
  document.querySelector('.time-controls.daily').addEventListener('click', changeForecast);
  document.querySelector('.time-controls.hourly').addEventListener('click', changeForecast);
}

export default createPage;
