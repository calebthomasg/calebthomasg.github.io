//ADD the key and change units to imperial

/*WEATHER SUMMARY*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83263,us&appid=164e0821821733ac8dbd642218f01f3c&units=imperial";

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

const apiURL2 ="https://api.openweathermap.org/data/2.5/forecast?zip=83263,us&appid=164e0821821733ac8dbd642218f01f3c&units=imperial";

fetch(apiURL2)
 .then((response) => response.json())
 .then((weatherInfo) => {
   console.log(weatherInfo);

   let forecastDayNumber=todayDayNumber;

  /*CREATES A TABLE AND TABLE ROWS*/
   let theDay= document.createElement("table");
   let section1 =document.createElement("tr");
   let section2= document.createElement("tr");
   let section3= document.createElement("tr");

    for (i=0; i<weatherInfo.list.length; i++){
      var time= weatherInfo.list[i].dt_txt;

      if (time.includes("18:00:00")){
        forecastDayNumber +=1;
        if (forecastDayNumber ===7){
          forecastDayNumber= 0;
        }
        /*DAY NAME*/
        let theDayName= document.createElement("th");
        theDayName.textContent= weekday[forecastDayNumber];
        section1.appendChild(theDayName);

        /*IMAGE*/
        let iconbox= document.createElement("td");
        let iconcode= weatherInfo.list[i].weather[0].icon;
        let iconPath= "https://openweathermap.org/img/w/"+iconcode+".png";
        let theIcon= document.createElement("img");
        theIcon.src=iconPath;
        iconbox.appendChild(theIcon);
        section2.appendChild(iconbox);

        /*TEMPERATURE*/
        let theTemp= document.createElement("td");
        theTemp.textContent= weatherInfo.list[i].main.temp+"\xB0";
        section3.appendChild(theTemp);

        theDay.appendChild(section1);
        theDay.appendChild(section2);
        theDay.appendChild(section3);

        document.getElementById("forecast").appendChild(theDay);
      }
    }

  });