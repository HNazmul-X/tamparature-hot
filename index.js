const cityName = document.querySelector("#city-name");
const searchCity = document.querySelector("#search-city");
const weatherIcon = document.querySelector("#weather-icon");
const cityNameShow = document.querySelector("#city-name-show");
const tempShow = document.querySelector("#temp-show");
const lead = document.querySelector(".lead");
searchCity.addEventListener("click", function (e) {
  if(cityName.value !== ""){
      getWeatherData();
  }
  else {
      document.querySelector('.city-alert').style.display="block"
  }
});

const getWeatherData = () => {
  const APIAdress = `http://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=51e4d3e3937627b75b6c11cd07579773&units=metric`;
  fetch(APIAdress)
    .then((res) => res.json())
    .then((data) => {
      weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      cityNameShow.innerText = data.name;
      tempShow.innerText = data.main.temp;
      lead.innerText = data.weather[0].main;

      console.log(data);
    });
};

getWeatherData()
