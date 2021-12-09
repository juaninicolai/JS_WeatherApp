const body = document.querySelector("body");
document.querySelector("#cityBtn").addEventListener("click", () => {
  const cityName = document.querySelector("#cityName").value;
  const apiKey = "29fdcf85ba163919f0b396e57dc3e0a8";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&appid=" +
    apiKey +
    "&units=metric";

  fetch(apiUrl)
    .then((Response) => Response.json())
    .then((weather) => {
      const div = document.querySelector("div");
      div.innerHTML = "";
      const name = document.createElement("p");
      name.innerHTML = "City name: " + weather.name;
      div.appendChild(name);

      const temperature = document.createElement("p");
      temperature.innerHTML = "Celcius: " + weather.main.temp;
      div.appendChild(temperature);

      const weatherIcon = document.createElement("img");
      const iconId = weather.weather[0].icon;
      weatherIcon.setAttribute(
        "src",
        "http://openweathermap.org/img/w/" + iconId + ".png"
      );
      div.appendChild(weatherIcon);

      const wind = document.createElement("p");
      wind.innerHTML = "Wind speed: " + weather.wind.speed;
      div.appendChild(wind);

      const sky = document.createElement("p");
      sky.innerHTML = "Sky status: " + weather.weather[0].main;
      div.appendChild(sky);

      const sunrise = weather.sys.sunrise;
      const date = new Date(sunrise * 1000);
      const timestr = date.toLocaleTimeString();

      const sunset = weather.sys.sunset;
      const date1 = new Date(sunset * 1000);
      const timestr1 = date1.toLocaleTimeString();

      const sun = document.createElement("p");
      sun.innerHTML = "Sunrise: " + timestr + "<br>" + "Sunset: " + timestr1;
      div.appendChild(sun);
    });
});

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const apiKey = "29fdcf85ba163919f0b396e57dc3e0a8";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((Response) => Response.json())
    .then((city) => {
      const div = document.querySelector("div");
      div.innerHTML = "";
      const name = document.createElement("p");
      name.innerHTML = "City name: " + city.name;
      div.appendChild(name);

      const temperature = document.createElement("p");
      temperature.innerHTML = "Celcius: " + city.main.temp;
      div.appendChild(temperature);

      const weatherIcon = document.createElement("img");
      const iconId = city.weather[0].icon;
      weatherIcon.setAttribute(
        "src",
        "http://openweathermap.org/img/w/" + iconId + ".png"
      );
      div.appendChild(weatherIcon);

      const wind = document.createElement("p");
      wind.innerHTML = "Wind speed: " + city.wind.speed;
      div.appendChild(wind);

      const sky = document.createElement("p");
      sky.innerHTML = "Status: " + city.weather[0].main;
      div.appendChild(sky);

      const sunrise = city.sys.sunrise;
      const date = new Date(sunrise * 1000);
      const timestr = date.toLocaleTimeString();

      const sunset = city.sys.sunset;
      const date1 = new Date(sunset * 1000);
      const timestr1 = date1.toLocaleTimeString();

      const sun = document.createElement("p");
      sun.innerHTML = "Sunrise: " + timestr + "<br>" + "Sunset: " + timestr1;
      div.appendChild(sun);
    });
}

function geoFindMe() {
  let status = document.querySelector("#status");
  let mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  status.textContent = "Locating…";
  status.textContent = navigator.geolocation.getCurrentPosition(success);
  //navigator.geolocation.getCurrentPosition(success);
}

document.querySelector("#find-me").addEventListener("click", geoFindMe);
