const btn = document.querySelector("btn");
const cityName = document.querySelector("#city");
cityName.addEventListener("change", weather);
weather();
function weather() {
  let weatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=cdcf3623c90ca29aa21af58d856e26c3&units=metric`;
  fetch(weatherApi)
    .then((res) => res.json())
    .then((data) => showWeather(data));

  function showWeather(data) {
    document.querySelector(".card-header_city").innerHTML = data.city.name;
    document.querySelector(".footer-temp").innerHTML =
      Math.round(data.list[0].main.temp) + "&deg";
    document.querySelector(".white-text").innerHTML =
      data.list[0].weather[0]["description"];
    document.querySelector(".list-km").innerHTML =
      data.list[0].wind.speed.toFixed(1) + " km/h";
    document.querySelector(".list-procent").innerHTML =
      data.list[0].main.humidity + " %";
    document.querySelector(".card-img").innerHTML =
      `<img src="https://openweathermap.org/img/wn/` +
      data.list[0].weather[0]["icon"] +
      `@2x.png">`;
    //tommarow
    document.querySelector(".temp-tomorrow").innerHTML =
      Math.round(data.list[9].main.temp) + "&deg";
    document.querySelector(".km-tomorrow").innerHTML =
      data.list[9].wind.speed.toFixed(1) + " km/h";
    document.querySelector(".procent-tomorrow").innerHTML =
      data.list[9].main.humidity + " %";
    document.querySelector(".img-tomorrow").innerHTML =
      `<img src="https://openweathermap.org/img/wn/` +
      data.list[9].weather[0]["icon"] +
      `@2x.png">`;
    document.querySelector(".white-tomorrow").innerHTML =
      data.list[9].weather[0]["description"];
    //after
    document.querySelector(".temp-after").innerHTML =
      Math.round(data.list[17].main.temp) + "&deg";
    document.querySelector(".km-after").innerHTML =
      data.list[17].wind.speed.toFixed(1) + " km/h";
    document.querySelector(".procent-after").innerHTML =
      data.list[17].main.humidity + " %";
    document.querySelector(".img-after").innerHTML =
      `<img src="https://openweathermap.org/img/wn/` +
      data.list[17].weather[0]["icon"] +
      `@2x.png">`;
    document.querySelector(".white-after").innerHTML =
      data.list[17].weather[0]["description"];
  }
}

window.setInterval(function () {
  let clockTime = new Date().toLocaleTimeString().slice(0, -3);
  document.querySelector(".card-header_time").innerHTML = clockTime;
}, 1000);

btn.addEventListener("click", weather);
