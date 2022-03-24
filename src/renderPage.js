import renderLeftColumn from './renderLeftColumn';
import renderRightColumn from './renderRightColumn';

function renderPage(weatherDataObject) {
  document.querySelector('body').innerHTML = '';
  const main = document.createElement('main');
  const topDiv = document.createElement('div');
  topDiv.classList.add('top');
  const leftColumn = renderLeftColumn(weatherDataObject.current);
  const rightColumn = renderRightColumn(weatherDataObject.current);
  topDiv.append(leftColumn, rightColumn);
  main.append(topDiv);
  console.log(weatherDataObject);
  return main;
}

export default renderPage;
