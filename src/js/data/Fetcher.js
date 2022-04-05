import CurrentState from '../main/CurrentState';

class Fetcher {
  static API_KEY = '7234a9fe0940b7ea4f15538b32fd50ac';

  static currentUnits = 'metric';

  static getUnits() {
    return this.currentUnits;
  }

  static setUnits(units) {
    this.currentUnits = units;
  }

  static async fetchData(city = CurrentState.getDefaultCity()) {
    const coordResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}&units=${this.currentUnits}`
    );
    const coordResponseJson = await coordResponse.json();
    const coords = coordResponseJson.coord;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${this.API_KEY}&units=${this.currentUnits}`
    );
    const json = await response.json();
    CurrentState.setData(json);
    CurrentState.setCity(city);
    return json;
  }
}

export default Fetcher;
