import createDomElement from './createDomElement';

function renderRightColumn(weatherDataObject) {
  const rightColumn = createDomElement('div', {}, 'right');
  const { humidity, feelsLike, rainChance, wind } = { ...weatherDataObject };
  const details = { humidity, feelsLike, rainChance, wind };
  Object.values(details).forEach((detail) => {
    const div = createDomElement('div', { innerText: detail.text }, 'detail-box');
    const img = createDomElement('img', { src: detail.icon, height: '90', width: '90' }, 'icon');
    const value = createDomElement('div', { innerText: detail.value }, 'big');
    div.append(img, value);
    rightColumn.append(div);
  });
  return rightColumn;
}

export default renderRightColumn;
