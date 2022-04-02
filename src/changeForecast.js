import currentState from './currentState';
import renderForecast from './renderForecast';

function changeSliderDisplay() {
  const controls = document.querySelector('.slider-controls');
  if (currentState.getForecastFrequency() === 'hourly') {
    controls.classList.remove('hidden');
  } else {
    controls.classList.add('hidden');
  }
}

function changeForecast() {
  currentState.setForecastFrequency(this.textContent.toLowerCase());
  const forecast = renderForecast(currentState.getData()[currentState.getForecastFrequency()]);
  const bottom = document.querySelector('.bottom');
  bottom.querySelector('.selected').classList.remove('selected');
  this.classList.add('selected');
  bottom.removeChild(document.querySelector('.forecast'));
  bottom.append(forecast);
  changeSliderDisplay();
}

export default changeForecast;
