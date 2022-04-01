import createDomElement from './createDomElement';
import leftArrowIcon from './assets/arrow-left.png';
import rightArrowIcon from './assets/arrow-right.png';
import emptyDotIcon from './assets/empty-dot.png';

function renderSliderControls() {
  const sliderControls = createDomElement('div', {}, 'slider-controls');
  const arrowLeft = createDomElement('img', { src: leftArrowIcon }, 'arrow-left');
  const arrowRight = createDomElement('img', { src: rightArrowIcon }, 'arrow-right');
  const emptyDot = createDomElement('img', { src: emptyDotIcon }, 'dot');
  const filledDot = emptyDot.cloneNode();
  filledDot.classList.add('marked');
  sliderControls.append(arrowLeft, filledDot, emptyDot, emptyDot.cloneNode(), arrowRight);
  return sliderControls;
}

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
  const sliderControls = renderSliderControls();
  sliderControls.classList.add('hidden');
  controlsDiv.append(sliderControls);
  return controlsDiv;
}

export default renderBottomControls;
