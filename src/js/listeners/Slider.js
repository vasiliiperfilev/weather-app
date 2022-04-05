import CurrentState from '../main/CurrentState';
import renderForecast from '../render/renderForecast';

class Slider {
  static cardsIndex = 0;

  static #moveToStart(cardsArr, count) {
    const toMove = cardsArr.splice(-count, count);
    cardsArr.unshift(...toMove);
    Slider.cardsIndex -= 1;
  }

  static #moveToEnd(cardsArr, count) {
    const toMove = cardsArr.splice(0, count);
    cardsArr.push(...toMove);
    Slider.cardsIndex += 1;
  }

  static #moveDots() {
    const dots = Array.from(document.querySelectorAll('.dot'));
    dots.forEach((dot) => {
      dot.classList.remove('marked');
    });
    if (Slider.cardsIndex > dots.length - 1) Slider.cardsIndex = 0;
    if (Slider.cardsIndex < 0) Slider.cardsIndex = dots.length - 1;
    dots[Slider.cardsIndex].classList.add('marked');
  }

  static #moveSlides(direction, cardsOnPage) {
    const forecastData = CurrentState.getForecastData();
    if (direction === '>') this.#moveToEnd(forecastData, cardsOnPage);
    if (direction === '<') this.#moveToStart(forecastData, cardsOnPage);
    CurrentState.setForecastData(forecastData);
  }

  static showNextSlides(direction, cardsOnPage) {
    Slider.#moveSlides(direction, cardsOnPage);
    Slider.#moveDots();
    const bottomDiv = document.querySelector('.bottom');
    bottomDiv.removeChild(bottomDiv.lastChild);
    bottomDiv.append(renderForecast(CurrentState.getForecastData()));
  }
}

export default Slider;
