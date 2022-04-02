import createDomElement from '../helpers/createDomElement';
import currentState from '../main/currentState';

function renderLeftColumn(currentData) {
  const leftColumn = createDomElement('div', {}, 'left');
  const temp = createDomElement('p', { innerText: currentData.temp }, 'huge', 'bold');
  const weather = createDomElement('p', { innerText: currentData.description }, 'big', 'bold');
  const city = createDomElement('p', { innerText: `${currentState.getCity()}` }, 'default');
  const time = createDomElement('p', { innerText: currentData.dt }, 'default');
  const icon = createDomElement(
    'img',
    {
      src: currentData.icon,
      height: '90',
      width: '90',
    },
    'weather-icon'
  );
  const searchForm = document.createElement('form');
  const label = createDomElement('label', { for: 'city' }, null);
  const input = createDomElement(
    'input',
    { type: 'text', id: 'city', name: 'city', placeholder: 'Search Location...' },
    null
  );
  const searchBtn = createDomElement('button', {}, 'search-btn');
  label.append(input);
  searchForm.append(label, searchBtn);
  leftColumn.append(weather, city, time, temp, icon, searchForm);
  return leftColumn;
}

export default renderLeftColumn;
