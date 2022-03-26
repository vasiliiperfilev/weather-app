import createDomElement from './createDomElement';

function renderLeftColumn(weatherDataObject) {
  const leftColumn = createDomElement('div', {}, 'left');
  const temp = createDomElement('p', { innerText: weatherDataObject.temp }, 'big', 'bold');
  const weather = createDomElement('p', { innerText: weatherDataObject.description }, 'big');
  const city = createDomElement('p', { innerText: `${weatherDataObject.city}` }, 'default');
  const time = createDomElement('p', { innerText: weatherDataObject.dt }, 'default');
  const icon = createDomElement(
    'img',
    {
      src: weatherDataObject.icon,
      height: '90',
      width: '90',
    },
    'weather-icon'
  );
  const searchForm = document.createElement('form');
  const label = createDomElement('label', { for: 'city' }, null);
  const input = createDomElement('input', { type: 'text', id: 'city', name: 'city' }, null);
  const searchBtn = createDomElement('button', { innerText: 'Search' }, 'search-btn');
  label.append(input);
  searchForm.append(label, searchBtn);
  leftColumn.append(weather, city, time, temp, icon, searchForm);
  return leftColumn;
}

export default renderLeftColumn;
