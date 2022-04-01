import currentState from './currentState';
import renderForecast from './renderForecast';

const slider = (() => {
  let cardsIndex = 0;

  function moveToStart(cardsArr, count) {
    const toMove = cardsArr.splice(-count, count);
    cardsArr.unshift(...toMove);
    cardsIndex -= 1;
  }

  function moveToEnd(cardsArr, count) {
    const toMove = cardsArr.splice(0, count);
    cardsArr.push(...toMove);
    cardsIndex += 1;
  }

  function moveDots() {
    const dots = Array.from(document.querySelectorAll('.dot'));
    dots.forEach((dot) => {
      dot.classList.remove('marked');
    });
    if (cardsIndex > dots.length - 1) cardsIndex = 0;
    if (cardsIndex < 0) cardsIndex = dots.length - 1;
    dots[cardsIndex].classList.add('marked');
  }

  function moveSlides(direction, cardsOnPage) {
    const forecastData = currentState.getForecastData();
    if (direction === '>') moveToEnd(forecastData, cardsOnPage);
    if (direction === '<') moveToStart(forecastData, cardsOnPage);
    currentState.setForecastData(forecastData);
  }

  function showSlides(direction, cardsOnPage) {
    moveSlides(direction, cardsOnPage);
    moveDots();
    const bottomDiv = document.querySelector('.bottom');
    bottomDiv.removeChild(bottomDiv.lastChild);
    bottomDiv.append(renderForecast(currentState.getForecastData()));
  }

  return showSlides;
})();

export default slider;
