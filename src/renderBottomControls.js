import createDomElement from './createDomElement';
import leftArrowIcon from './assets/arrow-left.png';
import rightArrowIcon from './assets/arrow-right.png';
import emptyDotIcon from './assets/empty-dot.png';

function renderBottomControls() {
  const controlsDiv = createDomElement('div', {}, 'controls');
  ['Daily', 'Hourly'].forEach((time) => {
    const timeControl = createDomElement(
      'div',
      { innerText: time },
      'time-controls',
      time.toLowerCase()
    );
    controlsDiv.append(timeControl);
  });
  const sliderDiv = createDomElement('div', {}, 'slider-controls');
  const sliderControls = {
    'arrow-left': leftArrowIcon,
    dot: emptyDotIcon,
    'arrow-right': rightArrowIcon,
  };
  Object.entries(sliderControls).forEach(([domClass, icon]) => {
    const elementDiv = createDomElement('img', { src: icon }, domClass);
    sliderDiv.append(elementDiv);
    if (domClass === 'dot') sliderDiv.append(elementDiv.cloneNode(), elementDiv.cloneNode());
  });
  controlsDiv.append(sliderDiv);
  return controlsDiv;
}

export default renderBottomControls;
