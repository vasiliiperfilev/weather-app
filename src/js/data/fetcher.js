import currentState from '../main/currentState';

const fetcher = (() => {
  const API_KEY = '7234a9fe0940b7ea4f15538b32fd50ac';
  let currentUnits = 'metric';

  function getUnits() {
    return currentUnits;
  }

  function setUnits(units) {
    currentUnits = units;
  }

  async function fetchData(city = currentState.getDefaultCity()) {
    const coordResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${currentUnits}`
    );
    const coordResponseJson = await coordResponse.json();
    const coords = coordResponseJson.coord;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=${currentUnits}`
    );
    const json = await response.json();
    currentState.setData(json);
    currentState.setCity(city);
    return json;
  }
  return {
    getUnits,
    setUnits,
    fetchData,
  };
})();

export default fetcher;
