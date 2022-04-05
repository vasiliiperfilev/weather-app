import format from 'date-fns/format';
import { fromUnixTime, getISODay } from 'date-fns';
import createDomElement from '../helpers/createDomElement';
import getWeekdayName from '../helpers/getWeekdayName';
import Parser from '../data/Parser';
import CurrentState from '../main/CurrentState';

function renderOneForecast(oneUnitData) {
  const oneUnitForecastDiv = createDomElement('div', {}, 'forecast-card');
  const dayTemp = createDomElement('p', { innerText: oneUnitData.dayTemp }, 'big', 'bold');
  const nightTemp = createDomElement('p', { innerText: oneUnitData.nightTemp }, 'default');
  const icon = createDomElement(
    'img',
    {
      src: oneUnitData.icon,
      height: '48',
      width: '48',
    },
    'weather-icon'
  );
  oneUnitForecastDiv.append(dayTemp, nightTemp, icon);
  return oneUnitForecastDiv;
}

function getForecastTime(date) {
  if (CurrentState.getForecastFrequency() === 'daily') {
    return getWeekdayName(getISODay(fromUnixTime(date)));
  }
  if (CurrentState.getForecastFrequency() === 'hourly') {
    return format(fromUnixTime(date), 'h a');
  }
  return null;
}

function renderForecast(forecastData) {
  const forecastDiv = createDomElement('div', {}, 'forecast');
  forecastData.forEach((dayData) => {
    const oneForecast = renderOneForecast(Parser.parseForecastWeather(dayData));
    const forecastTime = getForecastTime(dayData.dt);
    const timeDiv = createDomElement('p', { innerText: forecastTime }, 'big', 'bold');
    oneForecast.prepend(timeDiv);
    forecastDiv.append(oneForecast);
  });
  return forecastDiv;
}

export default renderForecast;
