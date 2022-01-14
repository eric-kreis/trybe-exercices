module.exports = (io) => io.on('connection', (socket) => {
  socket.on('starPost', ({ currentStars }) => {
    socket.broadcast.emit('updateStars', { stars: currentStars + 1 });
  });
});
