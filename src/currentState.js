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

  return {
    getCity,
    getForecastFrequency,
    getData,
    setCity,
    setForecastFrequency,
    setData,
  };
})();

export default currentState;
