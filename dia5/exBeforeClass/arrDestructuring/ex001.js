// Without array destructuring. //

const arrayCountries = ['Brazil', 'Japan', 'Canada', 'China'];

/* const firstCountry = arrayCountries[0];
const secondCountry = arrayCountries[1];
const thirdCountry = arrayCountries[2];
const fourthCountry = arrayCountries[3];

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry); */

// With array destructuring. //

const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

console.log(firstCountry);
console.log(secondCountry);
console.log(thirdCountry);
console.log(fourthCountry);