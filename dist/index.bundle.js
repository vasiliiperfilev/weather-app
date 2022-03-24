/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
var API_KEY = '7234a9fe0940b7ea4f15538b32fd50ac';

async function fetchData(city) {
  return fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&appid=").concat(API_KEY)).json();
}

console.log(fetchData('London'));
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsT0FBTyxHQUFHLGtDQUFoQjs7QUFDQSxlQUFlQyxTQUFmLENBQXlCQyxJQUF6QixFQUErQjtBQUM3QixTQUFPQyxLQUFLLDZEQUFzREQsSUFBdEQsb0JBQW9FRixPQUFwRSxFQUFMLENBQW9GSSxJQUFwRixFQUFQO0FBQ0Q7O0FBRURDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxTQUFTLENBQUMsUUFBRCxDQUFyQixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhcnQtY29uZmlnLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSAnNzIzNGE5ZmUwOTQwYjdlYTRmMTU1MzhiMzJmZDUwYWMnO1xuYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKGNpdHkpIHtcbiAgcmV0dXJuIGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHtBUElfS0VZfWApLmpzb24oKTtcbn1cblxuY29uc29sZS5sb2coZmV0Y2hEYXRhKCdMb25kb24nKSk7XG4iXSwibmFtZXMiOlsiQVBJX0tFWSIsImZldGNoRGF0YSIsImNpdHkiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==