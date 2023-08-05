const socket = io();

socket.on('chat_message', (message) => {
  addMessageToChat(message);
});

function addMessageToChat(message) {
  const messagesContainer = document.getElementById('messages-container');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = message;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

document.getElementById('send-btn').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;

  if (username && message) {
    const formattedMessage = `<span class="username">${username}:</span> ${message}`;
    socket.emit('chat_message', formattedMessage);
    addMessageToChat(formattedMessage);
    document.getElementById('message').value = '';
  }
});
