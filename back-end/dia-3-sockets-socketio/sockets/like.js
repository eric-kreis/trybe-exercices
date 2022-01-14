module.exports = (io) => io.on('connection', (socket) => {
  socket.on('likePost', ({ currentLikes }) => {
    io.emit('updateLikes', { likes: currentLikes + 1 });
  });
});
