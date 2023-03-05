function displayDataOnPage(data) {
  const main = document.querySelector("main");
  let weatherFacts = document.createElement("div");
  let weatherContainer = document.createElement("div");
  let miscContainer = document.createElement("div");
  let tempContainer = document.createElement("div");
  let cityName = document.createElement("h2");
  let temp = document.createElement("p");
  let tempType = document.createElement("p");
  let humidity = document.createElement("p");
  let weatherType = document.createElement("p");
  let weatherDescription = document.createElement("p");
  let windSpeed = document.createElement("p");

  weatherFacts.classList.add("grid");
  weatherContainer.classList.add("weather");
  miscContainer.classList.add("misc");
  cityName.classList.add("city");
  tempContainer.classList.add("temp");
  tempType.classList.add("tempType");

  data.temperature = Math.round(data.temperature);
  data.windSpeed = Math.round(data.windSpeed);

  cityName.innerHTML = data.name;
  tempType.innerHTML = "°F";
  temp.innerHTML = data.temperature;
  humidity.innerHTML = "Humidity: " + data.humidity;
  weatherType.innerHTML = data.weatherType;
  weatherDescription.innerHTML = data.weatherDescription;
  windSpeed.innerHTML = "Wind Speed: " + data.windSpeed + " m/ph";

  weatherContainer.append(weatherType, weatherDescription);
  miscContainer.append(humidity, windSpeed);
  tempContainer.append(temp, tempType);
  weatherFacts.append(cityName, tempContainer, weatherContainer, miscContainer);
  main.appendChild(weatherFacts);
}

function clearOldWeatherData() {
  if (document.querySelector("div") != null) {
    document.querySelector("div").remove();
  }
}

export { displayDataOnPage, clearOldWeatherData };
