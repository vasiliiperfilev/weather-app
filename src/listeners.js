import dataFetcher from './dataFetcher';

const listeners = (() => {
  async function searchListener() {
    const city = document.querySelector('#city').value;
    const weatherData = await dataFetcher.getWeatherDataSafe(city);
    if (weatherData) console.log(weatherData);
  }

  return {
    searchListener,
  };
})();

export default listeners;
