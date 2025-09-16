// subbotHandler.js
const fs = require('fs');
const users = JSON.parse(fs.readFileSync('./users.json'));

module.exports = async function(m, conn) {
  const user = users[m.sender];
  if (!user || !user.activo) return;

  // Procesar comandos y mensajes del usuario
  if (m.text.startsWith('.')) {
    const command = m.text.substring(1).split(' ')[0];
    switch (command) {
      case 'comando1':
        // Lógica para el comando1
        break;
      case 'comando2':
        // Lógica para el comando2
        break;
      default:
        // Lógica para comandos desconocidos
    }
  } else {
    // Lógica para mensajes de texto normales
  }
};