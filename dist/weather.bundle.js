"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["weather"],{

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processWeatherData": () => (/* binding */ processWeatherData)
/* harmony export */ });
async function getWeather(location) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=65cf32b624aa3812444be7a75b05d32a&units=imperial`
    );
    let weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}

async function processWeatherData(location) {
  try {
    let data = await getWeather(location);
    let processedData = {};
    processedData.name = data.name;
    processedData.temperature = data.main.temp;
    processedData.humidity = data.main.humidity;
    processedData.weatherType = data.weather[0].main;
    processedData.weatherDescription = data.weather[0].description;
    processedData.windSpeed = data.wind.speed;

    return processedData;
  } catch (error) {
    console.error(error);
  }
}




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/weather.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUU4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mQVBQSUQ9NjVjZjMyYjYyNGFhMzgxMjQ0NGJlN2E3NWIwNWQzMmEmdW5pdHM9aW1wZXJpYWxgXG4gICAgKTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyRGF0YShsb2NhdGlvbikge1xuICB0cnkge1xuICAgIGxldCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihsb2NhdGlvbik7XG4gICAgbGV0IHByb2Nlc3NlZERhdGEgPSB7fTtcbiAgICBwcm9jZXNzZWREYXRhLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgcHJvY2Vzc2VkRGF0YS50ZW1wZXJhdHVyZSA9IGRhdGEubWFpbi50ZW1wO1xuICAgIHByb2Nlc3NlZERhdGEuaHVtaWRpdHkgPSBkYXRhLm1haW4uaHVtaWRpdHk7XG4gICAgcHJvY2Vzc2VkRGF0YS53ZWF0aGVyVHlwZSA9IGRhdGEud2VhdGhlclswXS5tYWluO1xuICAgIHByb2Nlc3NlZERhdGEud2VhdGhlckRlc2NyaXB0aW9uID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgIHByb2Nlc3NlZERhdGEud2luZFNwZWVkID0gZGF0YS53aW5kLnNwZWVkO1xuXG4gICAgcmV0dXJuIHByb2Nlc3NlZERhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgcHJvY2Vzc1dlYXRoZXJEYXRhIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=