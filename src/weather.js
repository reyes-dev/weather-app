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

export { processWeatherData };
