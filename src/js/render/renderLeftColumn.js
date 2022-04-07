import createDomElement from '../helpers/createDomElement';
import CurrentState from '../main/CurrentState';

function renderLeftColumn(currentData) {
  const leftColumn = createDomElement('div', {}, 'left');
  const temp = createDomElement('p', { innerText: currentData.temp }, 'huge', 'bold');
  const weather = createDomElement('p', { innerText: currentData.description }, 'big', 'bold');
  const city = createDomElement('p', { innerText: `${CurrentState.getCity()}` }, 'default');
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
    {
      type: 'text',
      id: 'city',
      name: 'city',
      placeholder: 'Search Location...',
      pattern: '[a-zA-Z]+',
      title: 'Please, use letters only',
    },
    null
  );
  const searchBtn = createDomElement('button', { type: 'submit' }, 'search-btn');
  label.append(input);
  searchForm.append(label, searchBtn);
  leftColumn.append(weather, city, time, temp, icon, searchForm);
  return leftColumn;
}

export default renderLeftColumn;
