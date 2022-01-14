const starBtn = document.getElementById('starIcon');

const sendStar = () => {
  starBtn.addEventListener('click', () => {
    const currentStars = document.getElementById('currentStars');
    socket.emit('starPost', { currentStars: +currentStars.innerText });
  });
};

const addStar = () => {
  const currentStars = document.getElementById('currentStars');
  socket.on('updateStars', ({ stars }) => {
    currentStars.innerText = stars;
  });
};

sendStar();
addStar();

window.onbeforeunload = () => {
  socket.disconnect();
};
