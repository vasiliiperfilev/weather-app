import CurrentState from '../main/CurrentState';
import renderForecast from '../render/renderForecast';

function changeSliderDisplay() {
  const controls = document.querySelector('.slider-controls');
  if (CurrentState.getForecastFrequency() === 'hourly') {
    controls.classList.remove('hidden');
  } else {
    controls.classList.add('hidden');
  }
}

function changeForecast() {
  CurrentState.setForecastFrequency(this.textContent.toLowerCase());
  const forecast = renderForecast(CurrentState.getData()[CurrentState.getForecastFrequency()]);
  const bottom = document.querySelector('.bottom');
  bottom.querySelector('.selected').classList.remove('selected');
  this.classList.add('selected');
  bottom.removeChild(document.querySelector('.forecast'));
  bottom.append(forecast);
  changeSliderDisplay();
}

export default changeForecast;
