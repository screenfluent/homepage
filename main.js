const firstName = 'Krzysztof';
const age = 30;

console.log(`Nazywam się ${firstName} i mam ${age} lat.`);

const header = document.querySelector('.page-header__heading--js');

header.innerHTML = `Nazywam się ${firstName} i mam ${age} lat........`;