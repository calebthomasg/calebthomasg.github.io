const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {    
        let card = document.createElement('section');
        let titlediv=document.createElement('div')
        titlediv.classList.add('card-title');
        let bodydiv=document.createElement('div');
        bodydiv.classList.add("card-body")
        let name = document.createElement('h2');
        let birthday = document.createElement("p");
        let placeofbirth =document.createElement("p");
        let picture = document.createElement("img");
        //name
        name.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        //birthdate
        birthday.textContent="Date of Birth: "+prophets[i].birthdate;
        //birthplace
        placeofbirth.textContent = "Place of Birth: "+ prophets[i].birthplace;
        //img
        picture.setAttribute("src",prophets[i].imageurl);
        picture.setAttribute(
            "alt","Picture of Prophet: "+ name
        );

        card.appendChild(name);
        card.appendChild(birthday);
        card.appendChild(picture);

        document.querySelector('div.cards').appendChild(card);
    }
});