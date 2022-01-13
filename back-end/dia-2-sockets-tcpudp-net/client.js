const net = require('net');
const stdin = process.openStdin();

const client = net.connect({ port: 8080 }, () => {
  console.log('Connected to the server!');

  stdin.addListener('data', (data) => {
    client.write(data.toString().trim());
  });
});

client.on('end', () => {
  console.log('Disconnected of the server');
});

client.on('close', () => { // Essa callback é executada quando o servidor fecha a conexão com o cliente
  console.log('You was disconnected by the server');
  process.exit(1);
});
