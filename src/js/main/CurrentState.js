class CurrentState {
  static #city = 'Coquitlam';

  static #defaultCity = 'Coquitlam';

  static #forecastFrequency = 'daily';

  static #data = null;

  static getCity() {
    return CurrentState.#city;
  }

  static getDefaultCity() {
    return CurrentState.#defaultCity;
  }

  static setCity(newCity) {
    CurrentState.#city = newCity;
  }

  static getForecastFrequency() {
    return CurrentState.#forecastFrequency;
  }

  static setForecastFrequency(newFrequency) {
    CurrentState.#forecastFrequency = newFrequency;
  }

  static getData() {
    return CurrentState.#data;
  }

  static setData(newData) {
    CurrentState.#data = newData;
  }

  static getForecastData() {
    return CurrentState.#data[CurrentState.#forecastFrequency];
  }

  static setForecastData(newData) {
    CurrentState.#data[CurrentState.#forecastFrequency] = newData;
  }
}

export default CurrentState;
