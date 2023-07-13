const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    displayProphets(data.prophets);
  }
  
const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birth = document.createElement('p');
        let place = document.createElement('p');
        let death = document.createElement('p');
        let age = document.createElement('p');

        let deathAge;

        if(prophet.death != null){
            let deathArray = prophet.death.split(" ");
            let deathYear = deathArray[2];
            let birthArray = prophet.birthdate.split(" ");
            let birthYear = birthArray[2];

            deathAge = deathYear - birthYear;
        } else {
            let birthArray = prophet.birthdate.split(" ");
            let birthYear = birthArray[2];
            deathAge = 2023 - birthYear;
        }

        h2.textContent = `${prophet.name} ${prophet.lastname}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        birth.textContent = `Birth Date: ${prophet.birthdate}`

        place.textContent = `Birth Place: ${prophet.birthplace}`

        death.textContent = `Death Date: ${prophet.death}`

        age.textContent = `Age: ${deathAge}`

        card.appendChild(h2);
        card.appendChild(portrait);
        card.append(birth);
        card.append(place);
        card.append(death);
        card.append(age);
    
        cards.appendChild(card);
    });
}

getProphetData();