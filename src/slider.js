const slider = (() => {
  function moveToStart(cardsArr, count) {
    const toMove = cardsArr.splice(-count, count);
    cardsArr.unshift(...toMove);
  }

  function moveToEnd(cardsArr, count) {
    const toMove = cardsArr.splice(0, count);
    cardsArr.push(...toMove);
  }

  function showSlides(direction, cardsOnPage) {
    const forecasts = Array.from(document.querySelectorAll('.forecast-card'));
    const forecastDiv = document.querySelector('.forecast');
    if (direction === '>') moveToEnd(forecasts, cardsOnPage);
    if (direction === '<') moveToStart(forecasts, cardsOnPage);
    forecastDiv.replaceChildren(...forecasts);
  }

  return showSlides;
})();

export default slider;
