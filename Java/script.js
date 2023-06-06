var weatherUrl = $(`https.openweathermap.org/data/2.5/forecast?q=`+newName.value+`&appid=438ec39c290f25e9ef3e7ff5fed47ead`)

function cityinfo() {
    const newName= document.getElementById(`cityInput`);
    const cityName= document.getElementById(`cityName`);
    cityName.innerHTML = "--"+newName.value+"--"
}
fetch(weatherUrl)
