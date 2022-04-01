import parser from './parser';
import createDomElement from './createDomElement';
import renderBottomControls from './renderBottomControls';
import renderLeftColumn from './renderLeftColumn';
import renderRightColumn from './renderRightColumn';
import renderForecast from './renderForecast';

function renderPage(weatherDataObject) {
  document.querySelector('body').innerHTML = '';
  const main = document.createElement('main');
  const topDiv = createDomElement('div', {}, 'top');
  const leftColumn = renderLeftColumn(parser.parseCurrentWeather(weatherDataObject));
  const rightColumn = renderRightColumn(parser.parseCurrentWeather(weatherDataObject));
  const bottomDiv = createDomElement('div', {}, 'bottom');
  const controlsDiv = renderBottomControls();
  const forecast = renderForecast(weatherDataObject.daily);
  topDiv.append(leftColumn, rightColumn);
  bottomDiv.append(controlsDiv, forecast);
  main.append(topDiv, bottomDiv);
  console.log(weatherDataObject);
  return main;
}

export default renderPage;
