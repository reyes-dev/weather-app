async function getWeather(location) {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=65cf32b624aa3812444be7a75b05d32a`
    );
    let weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}
let weather = getWeather("Sacramento");
weather.then((data) => console.log(data));
