import { debounce } from 'debounce';
import countryCards from './templates/country.hbs';
import countriesList from './templates/countries.hbs';

// import fetchCountries from './js/fetchCountries';

import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

const containerRef = document.querySelector('.countries-container');
const inputRef = document.querySelector('.input');

inputRef.addEventListener('input', debounce(fetchCountries, 500));

function fetchCountries() {
  const searchQuery = inputRef.value;
  fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
      return response.json();
    })
    .then(country => {
      inputRef.innerHTML = '';
      renderCoutries(country);
    })
    .catch(error => error);
}

function renderCoutries(country) {
  if (country.length === 1) {
    const card = countryCards(country);
    containerRef.innerHTML = card;
  } else if (country.length > 1 && country.length <= 10) {
    const list = countriesList(country);
    containerRef.innerHTML = list;
  } else if (country.length > 10) {
    defaultModules.set(PNotifyMobile, {});
    alert({
      text: 'Too many matches found. Please enter a more specific query!',
    });
  }
}
