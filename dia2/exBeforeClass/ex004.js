const paises = {
  França: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(paises);

for (const index of pairKeyValue) {
  console.log(`--------
País: ${index[0]}
Capital: ${index[1]}`);
}
