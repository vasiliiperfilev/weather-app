const currentState = (() => {
  let city = 'Coquitlam';
  let forecastFrequency = 'daily';
  let data = null;

  function getCity() {
    return city;
  }

  function setCity(newCity) {
    city = newCity;
  }

  function getForecastFrequency() {
    return forecastFrequency;
  }

  function setForecastFrequency(newFrequency) {
    forecastFrequency = newFrequency;
  }

  function getData() {
    return data;
  }

  function setData(newData) {
    data = newData;
  }

  function getForecastData() {
    return data[forecastFrequency];
  }

  function setForecastData(newData) {
    data[forecastFrequency] = newData;
  }

  return {
    getCity,
    getForecastFrequency,
    getData,
    getForecastData,
    setCity,
    setForecastFrequency,
    setData,
    setForecastData,
  };
})();

export default currentState;
