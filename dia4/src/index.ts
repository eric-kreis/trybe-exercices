import express, { Request, Response } from 'express';

const app = express();

const handleHelloWorldRequest = (_: Request, response: Response) => {
  response.status(200).send('Hello World!');
};

app.get('/hello', handleHelloWorldRequest);

app.listen(3001, () => {
  console.log('Server is running on PORT 3001');
});
