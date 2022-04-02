import createDomElement from './createDomElement';
import leftArrowIcon from './assets/arrow-left.png';
import rightArrowIcon from './assets/arrow-right.png';
import emptyDotIcon from './assets/empty-dot.png';

function renderSliderControls() {
  const sliderControls = createDomElement('div', {}, 'slider-controls');
  const arrowLeft = createDomElement(
    'img',
    { src: leftArrowIcon, height: '30', width: '30' },
    'arrow-left'
  );
  const arrowRight = createDomElement(
    'img',
    { src: rightArrowIcon, height: '30', width: '30' },
    'arrow-right'
  );
  const emptyDot = createDomElement('img', { src: emptyDotIcon, height: '20', width: '20' }, 'dot');
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
      time.toLowerCase(),
      'big'
    );
    if (time === 'Daily') timeControl.classList.add('selected');
    controlsDiv.append(timeControl);
  });
  const sliderControls = renderSliderControls();
  sliderControls.classList.add('hidden');
  controlsDiv.append(sliderControls);
  return controlsDiv;
}

export default renderBottomControls;
