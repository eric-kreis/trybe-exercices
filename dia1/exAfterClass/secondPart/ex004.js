const mySkills = ['JavaScript', 'HTML', 'CSS', 'Emotional Intelligence', 'Leadership'].sort().join(', ');

  // Change the 'x' character for parameter;
const changeX = (string) => `Tryber x here!`.replace(/x/i, string);

const phrase = (stringChanged) => `${stringChanged} My main skills are: ${mySkills}.`;

console.log(phrase(changeX('Eric')));
