import './css/styles.css';
import  debounce  from 'lodash.debounce';
import country from './country.js';

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('input'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener("input", debounce((e)=>{
  const country = e.target.value;
  fetchByCountry(country);},DEBOUNCE_DELAY))

// fetchByCountry("Usa");

function fetchByCountry(name){
  console.log(name);
  fetch(
    `https://restcountries.com/v2/name/${name}?capital,population,flags,languages;`
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(countries => {
      console.log(countries);
      return countries
        .map(
          (
            { name: official, capital, population, flags: { svg }, languages },
            i
          ) => {
            // const ln = languages[i].name;
            // console.log(name);
            return `<div  style="display:flex; align-items: center; gap: 15px ">
               <img src="${svg}" alt="${official}" height="60" "> 
                <h1>${official}</h1>
                          </div>
                            <ul>
                              <li><p>capital: <span>${capital}</span></p></li>
                              <li><p>population: <span>${population}</span></p></li>
                              <li><p>languages: <span>${languages}</span></p></li>
                            </ul>`;
          }
        )
        .join(' ');
    })
  
    .then(country => {
      refs.countryInfo.insertAdjacentHTML('afterbegin', country);
    })
  
    .catch(() => {
      console.log('error');
    });
  
}
