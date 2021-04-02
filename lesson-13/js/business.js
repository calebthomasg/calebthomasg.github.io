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