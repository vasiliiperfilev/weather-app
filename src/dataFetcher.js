import fromUnixTime from 'date-fns/fromUnixTime';
import humidityIcon from './assets/humidity.png';
import thermoIcon from './assets/thermometer.png';
import rainIcon from './assets/rain.png';
import windIcon from './assets/wind.png';

const dataFetcher = (() => {
  const API_KEY = '7234a9fe0940b7ea4f15538b32fd50ac';
  let currentUnits = 'metric';

  function getUnits() {
    return currentUnits;
  }

  function setUnits(units) {
    currentUnits = units;
  }

  function handleError(fn) {
    return async function displayError(...params) {
      return fn(...params).catch(() => {
        console.log('City not found or server is down!');
      });
    };
  }

  async function fetchData(city) {
    const coordResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${currentUnits}`
    );
    const coordResponseJson = await coordResponse.json();
    const coords = coordResponseJson.coord;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}&units=${currentUnits}`
    );
    return response.json();
  }

  function parseWeatherDetails(weatherDataObject) {
    return {
      temp: `${Math.round(weatherDataObject.current.temp)}°C`,
      description: `${weatherDataObject.current.weather[0].description.toUpperCase()}`,
      dt: `${fromUnixTime(weatherDataObject.current.dt)}`,
      icon: `http://openweathermap.org/img/wn/${weatherDataObject.current.weather[0].icon}@2x.png`,
      humidity: {
        text: 'Humidity',
        value: `${weatherDataObject.current.humidity}%`,
        icon: humidityIcon,
      },
      feelsLike: {
        text: 'Feels like',
        value: `${weatherDataObject.current.feels_like}°C`,
        icon: thermoIcon,
      },
      rainChance: {
        text: 'Chance of rain',
        value: `${weatherDataObject.hourly[0].pop * 100}%`,
        icon: rainIcon,
      },
      wind: {
        text: 'Wind speed',
        value: `${weatherDataObject.current.wind_speed} km/h`,
        icon: windIcon,
      },
    };
  }

  async function getWeatherData(city) {
    const response = await fetchData(city, currentUnits);
    console.log(response);
    const weatherData = parseWeatherDetails(response);
    return Object.assign(weatherData, { city });
  }

  const getWeatherDataSafe = handleError(getWeatherData);
  return {
    getUnits,
    setUnits,
    getWeatherDataSafe,
  };
})();

export default dataFetcher;
