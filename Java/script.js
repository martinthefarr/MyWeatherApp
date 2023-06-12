// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// 438ec39c290f25e9ef3e7ff5fed47ead

const weatherIcon = document.querySelectorAll(".weatherIcon")
function cityinfo() {
    const newName= document.getElementById(`cityInput`);
    // const cityName= document.getElementById(`cityName`);
    // cityName.innerHTML = "--"+newName.value+"--"
    forecast(newName.value)
    currentDay(newName.value)
}

function currentDay(location) {
  var weatherUrl = (`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=438ec39c290f25e9ef3e7ff5fed47ead&units=imperial`)
  fetch(weatherUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

            document.querySelector(`.currentforecastDate`).textContent=data.dt_txt
            document.querySelector(`.currentHigh`).textContent=data.main.temp_max + "°F"
            document.querySelector(`.currentLow`).textContent=data.main.temp_min + "°F"
            document.querySelector(`.currentHumidity`).textContent=data.main.humidity + "%"
            document.querySelector(`.currentWindspeed`).textContent=data.wind.speed + " mph"
            document.querySelector(`.City`).textContent=data.name

            document.querySelector(".currentweather").src = "https://openweathermap.org/img/wn/"+data.weather[0].icon +".png";
            
  })
}

function forecast(location) {
    var weatherUrl = (`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=438ec39c290f25e9ef3e7ff5fed47ead&units=imperial`)
    fetch(weatherUrl 
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var cardIndex = 0
    for (let i = 0; i < data.list.length; i++) {
        const element = data.list[i];

        if (element.dt_txt.includes("12:00:00") ){
            console.log(element)
            
            document.querySelectorAll(`.forecastDate`)[cardIndex].textContent=element.dt_txt
            document.querySelectorAll(`.High`)[cardIndex].textContent=element.main.temp_max + "°F"
            document.querySelectorAll(`.Low`)[cardIndex].textContent=element.main.temp_min + "°F"
            document.querySelectorAll(`.Humidity`)[cardIndex].textContent=element.main.humidity + "%"
            document.querySelectorAll(`.Windspeed`)[cardIndex].textContent=element.wind.speed + " mph"
            document.querySelectorAll(`.CityName`)[cardIndex].textContent=data.city.name
            

            console.log(data.weather)
             weatherIcon[cardIndex].src  = "https://openweathermap.org/img/wn/"+element.weather[0].icon +".png";
            
            
            cardIndex++
            
        }

    }
    
  });
}

document.querySelector("#search").addEventListener("click", cityinfo)
