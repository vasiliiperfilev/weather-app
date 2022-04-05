import Fetcher from '../data/Fetcher';
import renderPage from '../render/renderPage';
import CurrentState from './CurrentState';
import Slider from '../listeners/Slider';
import changeForecast from '../listeners/changeForecast';

async function safeFetch(city = CurrentState.getDefaultCity()) {
  try {
    return await Fetcher.fetchData(city);
  } catch {
    alert('City not found');
    return Fetcher.fetchData(CurrentState.getCity());
  }
}

async function setupPage(city = CurrentState.getDefaultCity()) {
  const data = await safeFetch(city);
  document.querySelector('body').append(renderPage(data));
  document.querySelector('.search-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const newCity = document.querySelector('#city').value;
    setupPage(newCity);
  });
  document.querySelector('.time-controls.daily').addEventListener('click', changeForecast);
  document.querySelector('.time-controls.hourly').addEventListener('click', changeForecast);
  document
    .querySelector('.arrow-left')
    .addEventListener('click', Slider.showNextSlides.bind(null, '<', 8));
  document
    .querySelector('.arrow-right')
    .addEventListener('click', Slider.showNextSlides.bind(null, '>', 8));
}

export default setupPage;
