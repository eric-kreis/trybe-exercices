const n = 5;
let asterisco = '*';
let mid = (n + 1) / 2;
let time = 1;
let left = mid;
let right = mid;
for (let linha = 1; linha <= mid; linha ++) {
  let line = '';
  for (let column = 1; column <= n; column ++) {
    if (column == left || column == right || linha == mid){
      line += asterisco;
    } else {
      line += ' ';
    };
  };
  console.log(line);
  left--;
  right++;
};