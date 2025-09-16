import db from '../lib/database.js'

let handler = async (m, { conn, usedPrefix }) => {
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
    if (who == conn.user.jid) return m.react('✖️')
    if (!(who in global.db.data.users)) return m.reply(`⚔️ Usuario no encontrado en mi lista de datos*`)
  
    let user = global.db.data.users[who]
    let total = (user.coin || 0) + (user.bank || 0);

    const texto = `Banco 🏦
 
Nombre » *${conn.getName(who)}*  
 monedas 🪙 *${user.coin} monedas*
Banco 🏦» *${user.bank} monedas*
Total de monedas *${total} monedas*

> *Usa .deposit para proteger tu dinero*`;

    await conn.reply(m.chat, texto, m)
}

handler.help = ['bal']
handler.tags = ['rpg']
handler.command = ['bal', 'balance', 'bank'] 
handler.register = true 
handler.group = true 

export default handler
