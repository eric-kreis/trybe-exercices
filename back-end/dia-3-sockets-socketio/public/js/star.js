const starBtn = document.getElementById('starIcon');

const sendStar = () => {
  starBtn.addEventListener('click', () => {
    const currentStars = document.getElementById('currentStars');
    currentStars.innerText = +currentStars.innerText + 1;
    socket.emit('starPost');
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
