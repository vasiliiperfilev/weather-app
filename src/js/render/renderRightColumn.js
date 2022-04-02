import createDomElement from '../helpers/createDomElement';

function renderRightColumn(currentData) {
  const rightColumn = createDomElement('div', {}, 'right');
  const { humidity, feelsLike, rainChance, wind } = { ...currentData };
  const details = { humidity, feelsLike, rainChance, wind };
  Object.values(details).forEach((detail) => {
    const div = createDomElement('div', {}, 'detail-box');
    const span = createDomElement('span', { innerText: detail.text }, null);
    const img = createDomElement('img', { src: detail.icon, height: '50', width: '50' }, 'icon');
    const value = createDomElement('div', { innerText: detail.value }, 'big', 'bold');
    div.append(img, span, value);
    rightColumn.append(div);
  });
  return rightColumn;
}

export default renderRightColumn;
