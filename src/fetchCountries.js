export function fetchCountries(name){

return fetch(`https://restcountries.com/v2/name/${name}?capital,population,flags,lang`)
.then(response => {return response.json();})
}

