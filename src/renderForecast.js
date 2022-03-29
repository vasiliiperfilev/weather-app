import format from 'date-fns/format';
import { fromUnixTime, getISODay } from 'date-fns';
import createDomElement from './createDomElement';
import getWeekdayName from './getWeekdayName';
import parser from './parser';
import currentState from './currentState';

function renderOneForecast(oneUnitData) {
  const oneUnitForecastDiv = createDomElement('div', {}, null);
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
  if (currentState.getForecastFrequency() === 'daily') {
    return getWeekdayName(getISODay(fromUnixTime(date)));
  }
  if (currentState.getForecastFrequency() === 'hourly') {
    return format(fromUnixTime(date), 'h a');
  }
  return null;
}

function renderForecast(forecastData) {
  const forecastDiv = createDomElement('div', {}, 'forecast');
  forecastData.forEach((dayData) => {
    const oneForecast = renderOneForecast(parser.parseForecastWeather(dayData));
    const forecastTime = getForecastTime(dayData.dt);
    const timeDiv = createDomElement('p', { innerText: forecastTime }, 'big', 'bold');
    oneForecast.prepend(timeDiv);
    forecastDiv.append(oneForecast);
  });
  return forecastDiv;
}

export default renderForecast;
