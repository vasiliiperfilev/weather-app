import createDomElement from './createDomElement';

function renderLeftColumn(weatherDataObject) {
  const leftColumn = createDomElement('div', {}, 'left');
  const temp = createDomElement('p', { innerText: `${weatherDataObject.temp}` }, 'big', 'bold');
  const weather = createDomElement(
    'p',
    { innerText: `${weatherDataObject.weather[0].description.toUpperCase()}` },
    'big'
  );
  const icon = createDomElement(
    'img',
    {
      src: `http://openweathermap.org/img/wn/${weatherDataObject.weather[0].icon}@2x.png`,
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
  leftColumn.append(weather, temp, icon, searchForm);
  return leftColumn;
}

export default renderLeftColumn;
