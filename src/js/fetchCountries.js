// function fetchCountries(searchQuery) {
//   return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`).then(
//     response => {
//       return response.json();
//     },
//   );
// }

// export default fetchCountries;

// inputRef.addEventListener('input', event => {
//   const inputValue = event.currentTarget.value;

//   fetchCountries(inputValue)
//     .then(country => {
//       inputRef.innerHTML = '';
//       renderCoutries(country);
//     })
//     .catch(error => error);
// });
