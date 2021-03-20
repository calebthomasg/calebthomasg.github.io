//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=164e0821821733ac8dbd642218f01f3c&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    document.getElementById("place").innerHTML=weatherInfo.name;
    document.getElementById("currentTemp").innerHTML=weatherInfo.main.temp;
    document.getElementById("windSpeed").innerHTML=weatherInfo.wind.speed;
    document.getElementById("humidity").innerHTML=weatherInfo.main.humidity;
    document.getElementById("condition").innerHTML=weatherInfo.weather[0].description;

    
    const iconcode=weatherInfo.weather[0].icon;
    console.log(iconcode);

    const icon_path="http://openweathermap.org/img/w/"+iconcode+".png";
    console.log(icon_path);

    document.getElementById("weather_icon").src=icon_path;

 }); //end of "then" fat arrow function



