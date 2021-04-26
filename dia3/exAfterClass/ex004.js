const n = 10;
let asterisco = '*';
let line = '';
let mid = (n + 1) / 2;
let left = mid;
let right = mid;
for (let linha = 0; linha <= mid; linha ++) {
  for(let column = 0; column <= n; column ++) {
    if (column > left && column < right) {
      line += asterisco;
    } else {
      line += ' ';
    };
  };
  console.log(line);
  line = '';
  left--;
  right++;
};