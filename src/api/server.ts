import app from './app';

const PORT = 3001;

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
