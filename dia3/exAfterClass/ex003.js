const n = 5;
let asterisco = '*';
let line = '';
let position = n;
for (let index = 1; index <= n; index++) {
  for (let column = 1; column <= n; column++) {
    if (column < position) {
      line += ' ';
    } else {
      line += asterisco;
    };
  };
  console.log(line);
  position--;
  line = '';
};
