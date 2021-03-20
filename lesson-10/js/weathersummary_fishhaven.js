//ADD the key and change units to imperial

/*WEATHER SUMMARY*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83287,us&appid=164e0821821733ac8dbd642218f01f3c&units=imperial";

//FETCH AND WAIT FOR RESPONSE
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //DISPLAY TO CONSOLE
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




const d = new Date();

const todayDayNumber = d.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const apifURL = "https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&appid=164e0821821733ac8dbd642218f01f3c&units=imperial";
fetch(apifURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //DISPLAY TO CONSOLE
    console.log(weatherinfo);

     //let mylist = weatherInfo.list;
     let forecastDayNumber = todayDayNumber;
     console.log(forecastDayNumber);

     let mylist = weatherinfo.list;

for(i = 0; i<mylist.length;i++){
        var time = mylist [i].dt_txt;
        if (time.includes("18:00:00")) {
          console.log(
            "Found an entry with 18:00:00 in the time. It was report " +
              i +
              " from the mylist of 40"
          );

        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }

        let theDayName = document.createElement("span");
            theDayName.textContent = weekday[forecastDayNumber];
            console.log(">"+weekday[forecastDayNumber])

            let theTemp = document.createElement("p");
            theTemp.textContent = weatherinfo.list[i].main.temp + "\xB0";

            let iconcode=
            weatherinfo.list[i].weather[0].icon;
            let iconPath = "http://openweathermap.org/img/w/" + iconcode + ".png";
            let theIcon = document.createElement("img")
            theIcon.src=iconPath;

            let theDay = document.createElement("div");

            theDay.append(theDayName);
            theDay.append(theIcon);
            theDay.append(theTemp);
    
            document.getElementById("forecast").append(theDay);

        
      }
    }
  });



