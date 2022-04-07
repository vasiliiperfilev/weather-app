import CurrentState from '../main/CurrentState';
import promiseWithTimeout from '../helpers/promiseWithTimeout';

class Fetcher {
  static API_KEY = '7234a9fe0940b7ea4f15538b32fd50ac';

  static #currentUnits = 'metric';

  static getUnits() {
    return Fetcher.#currentUnits;
  }

  static setUnits(units) {
    Fetcher.#currentUnits = units;
  }

  static #throwErrors(response) {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
  }

  static async #getDataOrTimeout(url) {
    const { promiseOrTimeout, timeoutId } = promiseWithTimeout(fetch(url));
    try {
      const data = await promiseOrTimeout;
      return data;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  static async fetchData(city) {
    const coordResponse = await Fetcher.#getDataOrTimeout(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=${
        Fetcher.#currentUnits
      }`
    );
    Fetcher.#throwErrors(coordResponse);
    const coordResponseJson = await coordResponse.json();
    const coords = coordResponseJson.coord;
    const response = await Fetcher.#getDataOrTimeout(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${
        this.API_KEY
      }&units=${Fetcher.#currentUnits}`
    );
    Fetcher.#throwErrors(response);
    const json = await response.json();
    CurrentState.setData(json);
    CurrentState.setCity(city);
    return json;
  }
}

export default Fetcher;
