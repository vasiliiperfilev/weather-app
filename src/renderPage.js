import parser from './parser';
import createDomElement from './createDomElement';
import renderBottomControls from './renderBottomControls';
import renderLeftColumn from './renderLeftColumn';
import renderRightColumn from './renderRightColumn';

function renderPage(weatherDataObject) {
  document.querySelector('body').innerHTML = '';
  const main = document.createElement('main');
  const topDiv = createDomElement('div', {}, 'top');
  const bottomDiv = createDomElement('div', {}, 'bottom');
  const controlsDiv = renderBottomControls();
  const leftColumn = renderLeftColumn(parser.parseCurrentWeather(weatherDataObject));
  const rightColumn = renderRightColumn(parser.parseCurrentWeather(weatherDataObject));
  topDiv.append(leftColumn, rightColumn);
  bottomDiv.append(controlsDiv);
  main.append(topDiv, bottomDiv);
  console.log(weatherDataObject);
  return main;
}

export default renderPage;
