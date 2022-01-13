const net = require('net');

const server = net.createServer((connection) => {
  console.log('connected client');

  connection.on('data', (data) => {
    console.log(`client: ${data.toString()}`);
  });
});

server.getConnections((_err, count) => {
  console.log(`Count of connections: ${count}`);
});

server.listen(8080, () => {
  console.log('Server is running on PORT 8080')
});
