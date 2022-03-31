import dataFetcher from './dataFetcher';
import renderDOM from './renderDOM';
import currentState from './currentState';
import renderForecast from './renderForecast';
import slider from './slider';

function changeForecast() {
  currentState.setForecastFrequency(this.textContent.toLowerCase());
  const forecast = renderForecast(currentState.getData()[currentState.getForecastFrequency()]);
  const bottom = document.querySelector('.bottom');
  bottom.removeChild(document.querySelector('.forecast'));
  bottom.append(forecast);
}

async function createPage(city = 'Coquitlam') {
  const data = await dataFetcher.getWeatherDataSafe(city);
  document.querySelector('body').append(renderDOM(data));
  document.querySelector('.search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const newCity = document.querySelector('#city').value;
    currentState.setCity(newCity);
    createPage(newCity);
  });
  document.querySelector('.time-controls.daily').addEventListener('click', changeForecast);
  document.querySelector('.time-controls.hourly').addEventListener('click', changeForecast);
  document.querySelector('.arrow-left').addEventListener('click', slider.bind(null, '<', 8));
  document.querySelector('.arrow-right').addEventListener('click', slider.bind(null, '>', 8));
}

export default createPage;
