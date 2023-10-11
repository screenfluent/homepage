const firstNames = ['Adam', 'Bartosz', 'Cezary', 'Dariusz', 'Edward'];
const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
const age = Math.floor(Math.random() * 50) + 18;

console.log(`Nazywam się ${firstName} i mam ${age} lat.`);

const header = document.querySelector('.page-header__heading--js');

header.innerHTML = `Nazywam się ${firstName} i mam ${age} lat.`;

const calculate = myNumber => (myNumber+4)*7


calculate(1)

const result = calculate(2);
console.log(result);

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000
}

console.log(deathStar.name)

deathStar.fire('Rebel ship')