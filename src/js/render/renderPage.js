import Parser from '../data/Parser';
import createDomElement from '../helpers/createDomElement';
import renderBottomControls from './renderBottomControls';
import renderLeftColumn from './renderLeftColumn';
import renderRightColumn from './renderRightColumn';
import renderForecast from './renderForecast';

function renderPage(weatherDataObject) {
  document.querySelector('body').innerHTML = '';
  const main = document.createElement('main');
  const topDiv = createDomElement('div', {}, 'top');
  const leftColumn = renderLeftColumn(Parser.parseCurrentWeather(weatherDataObject));
  const rightColumn = renderRightColumn(Parser.parseCurrentWeather(weatherDataObject));
  const bottomDiv = createDomElement('div', {}, 'bottom');
  const controlsDiv = renderBottomControls();
  const forecast = renderForecast(weatherDataObject.daily);
  topDiv.append(leftColumn, rightColumn);
  bottomDiv.append(controlsDiv, forecast);
  main.append(topDiv, bottomDiv);
  return main;
}

export default renderPage;
