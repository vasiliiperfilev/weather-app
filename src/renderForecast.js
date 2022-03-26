import { fromUnixTime, getDay } from 'date-fns/fromUnixTime';
import getWeekdayName from './getWeekdayName';

function renderDaily(weatherDataObject) {
  weatherDataObject.daily.shift().forEach((day) => {
    getWeekdayName(getDay(fromUnixTime(day.dt)))
  })
}

function renderHourly(weatherDataObject) {

}

function renderForecast(weatherDataObject, granularity) {
  if (granularity === 'Daily') {
    return renderDaily(weatherDataObject);
  }
  if (granularity === 'Hourly') {
    return renderHourly(weatherDataObject);
  }
  return null;
}

export default renderForecast;
