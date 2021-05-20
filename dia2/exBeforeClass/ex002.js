const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

const habilities = (objeto) => {
  const keys = Object.keys(objeto);
  for (const key of keys) {
    console.log(`${key}, Nível: ${objeto[key]}`);
  }
}


console.log(`============
Student1: 
============`);
habilities(student1);
console.log(`============
Student2: 
============`);
habilities(student2);
