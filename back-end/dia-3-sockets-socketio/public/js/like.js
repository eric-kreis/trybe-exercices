const socket = window.io();
const likeBtn = document.getElementById('likeIcon');
const currentLikes = document.getElementById('currentLikes');

const sendLike = () => {
  likeBtn.addEventListener('click', () => {
    socket.emit('likePost', { currentLikes: +currentLikes.innerText });
  });
};

const addLike = () => {
  socket.on('updateLikes', ({ likes }) => {
    currentLikes.innerText = likes;
  });
};

sendLike();
addLike();

window.onbeforeunload = () => {
  socket.disconnect();
};
