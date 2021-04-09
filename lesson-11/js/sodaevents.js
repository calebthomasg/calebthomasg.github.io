const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
.then(function (response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
        if (i == 0) {
            let card = document.createElement('div');
            let info = document.createElement('section');
            let heading = document.createElement("h2");
            let event = document.createElement('p');
    
            heading.textContent = "Upcoming Events";
            event.textContent = towns[i].events;
                
    
            info.appendChild(heading);
            info.appendChild(event);
            card.appendChild(info);
    
            document.getElementById('cards0').appendChild(card);
        }
        
    }

});