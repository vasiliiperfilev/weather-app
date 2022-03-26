import createDomElement from './createDomElement';
import leftArrowIcon from './assets/arrow-left.png';
import rightArrowIcon from './assets/arrow-right.png';
import emptyDotIcon from './assets/empty-dot.png';

function renderBottomControls() {
  const controlsDiv = createDomElement('div', {}, 'controls');
  ['Daily', 'Hourly'].forEach((time) => {
    const timeControl = createDomElement('div', { innerText: time }, 'time-controls');
    controlsDiv.append(timeControl);
  });
  const sliderDiv = createDomElement('div', {}, 'slider-controls');
  const sliderControls = {
    'arrow-left': leftArrowIcon,
    dot1: emptyDotIcon,
    dot2: emptyDotIcon,
    dot3: emptyDotIcon,
    'arrow-right': rightArrowIcon,
  };
  Object.entries(sliderControls).forEach(([domClass, icon]) => {
    const elementDiv = createDomElement('img', { src: icon }, domClass);
    sliderDiv.append(elementDiv);
  });
  controlsDiv.append(sliderDiv);
  return controlsDiv;
}

export default renderBottomControls;
