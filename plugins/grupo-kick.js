var handler = async (m, { conn, participants, usedPrefix, command }) => {
  // Verifica si se mencionó o respondió a alguien
  if (!m.mentionedJid[0] && !m.quoted) {
    return conn.reply(m.chat, `📌 menciona al usuario para eliminarlo o respóndeme un mensaje~ 🧐`, m);
  }

  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

  const groupInfo = await conn.groupMetadata(m.chat);
  const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
  const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

  // Protecciones especiales al estilo 🐱 
  if (user === conn.user.jid) {
    return conn.reply(m.chat, `no puedes sacarme.`, m);
  }

  if (user === ownerGroup) {
    return conn.reply(m.chat, `👑 *No puedes eliminar al dueño del grupo*`, m);
  }

  if (user === ownerBot) {
    return conn.reply(m.chat, `⚔️ *no puedes sacar a mi creador*`, m);
  }

  // Ejecuta la expulsión
  try {
    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
    conn.reply(m.chat, `Usuario eliminado ⚔️`, m);
  } catch (e) {
    conn.reply(m.chat, `❌ el bot necesita permisos de admin`, m);
  }
};

handler.help = ['kick'];
handler.tags = ['grupo'];
handler.command = ['kick', 'echar', 'hechar', 'sacar', 'ban'];
handler.admin = true;
handler.group = true;
handler.botAdmin = true;
handler.register = true;

export default handler;
