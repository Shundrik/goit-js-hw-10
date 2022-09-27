import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
// import country from './country.js';
import { fetchCountries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('input'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener(
  'input',
  debounce(e => {
    const fromInput = e.target.value;
    const country = fromInput.trim();

    if (country.length === 0) {
       clear();
       return
    }
    fetchCountries(country)
      .then((response) => {
        if (response.length > 10) {
          clear();
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name'
          );
   
        } if (response.length < 10 && response.length > 2) {
          clear();
        
          const markup = markupTitle(response);
          refs.countryList.insertAdjacentHTML('afterbegin', markup)
        }
        if(response.length === 1){
          clear();
          const markupOne =  markup(response);
          refs.countryInfo.insertAdjacentHTML('afterbegin', markupOne)
        }
       
      })
      // .then(response => {
      //   if (response === undefined) {
      //     return;
      //   }
      //   renderMarkup(response);
      // })

      .catch(err =>
        {clear();
        Notiflix.Notify.failure('Oops, there is no country with that name')}
      );
  }, DEBOUNCE_DELAY)
);

function clear() {
  refs.countryInfo.innerHTML = ' ';
  refs.countryList.innerHTML = ' ';
}

function markup(countries) {
  return countries
    .map(
      (
        { name: official, capital, population, flags: { svg }, languages },
        i
      ) => {
        const ln = languages.map(({ name }) => {
          return name;
        });

        return `<div  style="display:flex; align-items: center; gap: 15px ">
               <img src="${svg}" alt="${official}" height="60" "> 
                <h1>${official}</h1>
                          </div>
                            <ul>
                              <li><p>capital: <span>${capital}</span></p></li>
                              <li><p>population: <span>${population}</span></p></li>
                              <li><p>languages: <span>${ln}</span></p></li>
                            </ul>`;
      }
    )
    .join(' ');
}

function markupTitle(countries) {
  return countries
    .map(({ name: official, flags: { svg } }, i) => {
      return `<div  style="display:flex; align-items: center; gap: 15px ">
               <img src="${svg}" alt="${official}" height="60" "> 
                <h1>${official}</h1>
                          </div>
                           `;
    })
    .join(' ');
}
