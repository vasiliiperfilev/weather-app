import fetcher from '../data/fetcher';
import renderPage from '../render/renderPage';
import currentState from './currentState';
import slider from '../listeners/slider';
import changeForecast from '../listeners/changeForecast';

function handleError(fn) {
  return async function displayError(...params) {
    return fn(...params).catch(() => {
      alert('City not found');
      return fetcher.fetchData(currentState.getCity());
    });
  };
}

async function setupPage(city = currentState.getDefaultCity()) {
  const data = await handleError(fetcher.fetchData)(city);
  document.querySelector('body').append(renderPage(data));
  document.querySelector('.search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const newCity = document.querySelector('#city').value;
    setupPage(newCity);
  });
  document.querySelector('.time-controls.daily').addEventListener('click', changeForecast);
  document.querySelector('.time-controls.hourly').addEventListener('click', changeForecast);
  document.querySelector('.arrow-left').addEventListener('click', slider.bind(null, '<', 8));
  document.querySelector('.arrow-right').addEventListener('click', slider.bind(null, '>', 8));
}

export default setupPage;
