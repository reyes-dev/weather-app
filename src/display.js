function displayDataOnPage(data) {
  let weatherFacts = document.createElement("div");
  let cityName = document.createElement("h2");
  let temp = document.createElement("p");
  let humidity = document.createElement("p");
  let weatherType = document.createElement("p");
  let weatherDescription = document.createElement("p");
  let windSpeed = document.createElement("p");

  cityName.innerHTML = data.name;
  temp.innerHTML = data.temperature;
  humidity.innerHTML = data.humidity;
  weatherType.innerHTML = data.weatherType;
  weatherDescription = data.weatherDescription;
  windSpeed = data.windSpeed;

  document.body.appendChild(weatherFacts);
  weatherFacts.append(
    cityName,
    temp,
    humidity,
    weatherType,
    weatherDescription,
    windSpeed
  );
}

export { displayDataOnPage };
