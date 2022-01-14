module.exports = (io) => io.on('connection', (socket) => {
  socket.on('starPost', ({ currentStars }) => {
    io.emit('updateStars', { stars: currentStars + 1 });
  });
});
