const n = 6;
let asterisco = '';
for (let linha = 1; linha <= n; linha++) {
  asterisco = '';
  for (let coluna = 1; coluna <= n; coluna++) {
    asterisco += '*';
  };
  console.log(asterisco);
}