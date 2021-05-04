let organization = {
  name: "Trybe",
  since: 2019,
};

localStorage.setItem('Company', JSON.stringify(organization));
let comp = JSON.parse(localStorage.getItem('Company'));
console.log(comp);

let classes = ['2021/abr', '2021/may'];
sessionStorage.setItem('classes', JSON.stringify(classes));
let cls = JSON.parse(sessionStorage.getItem('classes'))
console.log(cls);