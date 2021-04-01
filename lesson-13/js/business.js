const requestURL = "https://github.com/calebthomasg/calebthomasg.github.io/blob/master/lesson-13/json/local.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject['business'];

        for (let i = 0; i < business.length; i++) {
            if (i == 2 || i == 0 || i == 6) {
                let card = document.createElement('div');
                let info = document.createElement('section');
                let logo = document.createElement('figure');
                let name = document.createElement('h2');
                let phone = document.createElement('p');
                let website = document.createElement('p');
                let image = document.createElement('img');

                name.textContent = business[i].name;
                phone.textContent = business[i].phone;
                website.textContent = 'Website: ' + business[i].website;
                image.setAttribute('src', 'images/'+business[i].logo);
                image.setAttribute('alt', business[i].name + ' logo');

                logo.appendChild(image);
                card.appendChild(logo);

                info.appendChild(name);
                info.appendChild(phone);
                info.appendChild(website);
                card.appendChild(info);

                document.getElementById('cards').appendChild(card);
            }
        }

    });