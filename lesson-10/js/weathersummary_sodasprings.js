//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83276,us&appid=164e0821821733ac8dbd642218f01f3c&units=imperial";

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


/*FORECAST*/
const d =new Date();
console.log(d);

const todayDayNumber= d.getDay();
console.log(todayDayNumber);

const weekday= new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

const apiURL2 ="https://api.openweathermap.org/data/2.5/forecast?zip=83276,us&appid=164e0821821733ac8dbd642218f01f3c&units=imperial";

fetch(apiURL2)
 .then((response) => response.json())
 .then((weatherInfo) => {
   let mylist=weatherInfo.list;
   let forecastDayNumber=todayDayNumber;

   for (i =0; i < mylist.length; i++){
     let time =mylist[i].dt_txt;
     if (time.includes("18:00:00")){
      forecastDayNumber +=1;
      if(forecastDayNumber ===7){
        forecastDayNumber =0;
   }

    let theDayName=document.createElement("h4");
    theDayName.textContent=weekday[forecastDayNumber];

    let theTemp=document.createElement("span");
    theTemp.innerHTML=`${weatherInfo.list[i].maintemp}&#176;F`;

    let iconcode=weatherInfo.list[i].weather[0].icon;
    let iconPath="http://openweathermap.org/img/w/"+iconcode+".png";
    let theIcon=document.createElement("img");
    theIcon.src=iconPath;
    theIcon.alt= `Icon image of ${weatherInfo.list[i].weather[0].description}`;

    let theDay=document.createElement("div");

    theDay.append(theDayName);
    theDay.append(theIcon);
    theDay.append(theTemp);

    document.getElementById("forecast").append(theDay);

     }
  }
});

