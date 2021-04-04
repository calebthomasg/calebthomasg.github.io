const requestURL = "https://raw.githubusercontent.com/calebthomasg/calebthomasg.github.io/master/lesson-13/json/local.json";

/*DIRECTORY*/
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const business = jsonObject['business'];

        for (let i = 0; i < business.length; i++) {
            if (i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 7 || i == 8) {
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

