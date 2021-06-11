function techList(skills, name) {
  if (skills.length === 0) { return 'Vazio!'; }
  skills.sort();
  return skills.map((skill) => ({ tech: skill, name, }));
}

module.exports = techList;