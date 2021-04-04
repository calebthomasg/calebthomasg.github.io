
/*BUSINESSES*/
const requestURL = "https://raw.githubusercontent.com/calebthomasg/calebthomasg.github.io/master/lesson-13/json/local.json";
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject['business'];

        for (let i = 0; i < business.length; i++) {
            if (i == 0 || i == 1 || i == 2 ) {
                let card = document.createElement('div');
                let info = document.createElement('section');
                let logo = document.createElement('figure');
                let image = document.createElement('img');
                let name = document.createElement('h2');
                let phone = document.createElement('p');
                let website = document.createElement('p');
                

                
                name.textContent = business[i].name;
                image.setAttribute('src', 'images/'+business[i].logo);
                image.setAttribute('alt', business[i].name + ' logo');
                phone.textContent = business[i].phone;
                website.textContent = 'Website: ' + business[i].website;
                
                

                info.appendChild(name);
                card.appendChild(info);
                logo.appendChild(image);
                card.appendChild(logo);
                info.appendChild(phone);
                info.appendChild(website);
                


                document.getElementById('cards').appendChild(card);
            }
        }

    });


/*EVENTS*/
const requestURL2 = "https://raw.githubusercontent.com/calebthomasg/calebthomasg.github.io/master/lesson-13/json/events.json";
fetch(requestURL2)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const events = jsonObject['events'];

    for (let i = 0; i < events.length; i++) {
        if (i == 1 || i == 2 || i == 3){
            let card = document.createElement('div');
            let info = document.createElement('section');
            let event = document.createElement("h2");
            let day = document.createElement("p");
            let time = document.createElement("p");
            let details = document.createElement("p");

            event.textContent = events[i].event;
            day.textContent = events[i].day;
            time.textContent = events[i].time;
            details.textContent = events[i].details;
        

            
            card.appendChild(info);
            card.appendChild(info);
            info.appendChild(event);
            info.appendChild(day);
            info.appendChild(time);
            info.appendChild(details);
            
            
            document.getElementById('cards2').appendChild(card);
        }
    }

});