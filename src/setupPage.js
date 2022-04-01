import fetcher from './fetcher';
import renderPage from './renderPage';
import currentState from './currentState';
import slider from './slider';
import changeForecast from './changeForecast';

async function setupPage(city = 'Coquitlam') {
  const data = await fetcher.getWeatherDataSafe(city);
  document.querySelector('body').append(renderPage(data));
  document.querySelector('.search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const newCity = document.querySelector('#city').value;
    currentState.setCity(newCity);
    setupPage(newCity);
  });
  document.querySelector('.time-controls.daily').addEventListener('click', changeForecast);
  document.querySelector('.time-controls.hourly').addEventListener('click', changeForecast);
  document.querySelector('.arrow-left').addEventListener('click', slider.bind(null, '<', 8));
  document.querySelector('.arrow-right').addEventListener('click', slider.bind(null, '>', 8));
}

export default setupPage;
