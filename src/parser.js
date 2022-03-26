import fromUnixTime from 'date-fns/fromUnixTime';
import humidityIcon from './assets/humidity.png';
import thermoIcon from './assets/thermometer.png';
import rainIcon from './assets/rain.png';
import windIcon from './assets/wind.png';

const parser = (() => {
  function parseCurrentWeather(data) {
    return {
      city: data.city,
      temp: `${Math.round(data.current.temp)}°C`,
      description: `${data.current.weather[0].description.toUpperCase()}`,
      dt: `${fromUnixTime(data.current.dt)}`,
      icon: `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
      humidity: {
        text: 'Humidity',
        value: `${data.current.humidity}%`,
        icon: humidityIcon,
      },
      feelsLike: {
        text: 'Feels like',
        value: `${data.current.feels_like}°C`,
        icon: thermoIcon,
      },
      rainChance: {
        text: 'Chance of rain',
        value: `${data.hourly[0].pop * 100}%`,
        icon: rainIcon,
      },
      wind: {
        text: 'Wind speed',
        value: `${data.current.wind_speed} km/h`,
        icon: windIcon,
      },
    };
  }

  function parseForecastWeather(data) {
    return {
      dayTemp: `${Math.round(data.temp.day)}°C`,
      nightTemp: `${Math.round(data.temp.day)}°C`,
      icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };
  }
  return {
    parseCurrentWeather,
    parseForecastWeather,
  };
})();

export default parser;
