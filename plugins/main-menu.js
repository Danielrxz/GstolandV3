const handler = async (m, { conn }) => {
  const nombre = m.pushName || 'Usuario';
  const menu = `╭─────✦『 *Gatoland Bot* 』✦─────
│😼 Hola *${nombre}*, aquí tienes el menú
│🌐 Total comandos: 45 | Síguenos en WhatsApp
├─────────────────────
│🚀 *Subbots*
│• .code
│• .qr
├─────────────────────
│⚔️ *Menú Principal:*
│• .code
│• .qr
│• .menu / .help
│• .apk
│• .s / .toimg
│• .hd
│• .tourl
│• .rw
│• .c
│• .pin
├─────────────────────
│⚒️ *Economía:*
│• .daily
│• .work
│• .baltop
│• .banco
│• .versículo
│• .historia
├─────────────────────
│📽️ *Descargas:*
│• .play
│• .ytmp3
│• .ytmp4
│• .fb
│• .ig
│• .tt
│• .mega
│• .mediafire
├─────────────────────
│🎮 *Juegos Economía:*
│• .cazar
│• .minar
│• .talar
│• .venderpersonaje
│• .misexclovos
│• .exclavisar
├─────────────────────
│👥 *Grupo:*
│• .abrirgrupo / .cerrargrupo
│• .kick
│• .fantasmas
│• .tag
│• .invocar
│• .infogrupo
│• .link
│• .antilink
├─────────────────────
│🛠️ *Tools*
│• .s
│• .tourl
│• .whatmusic
│• .toimg
│• .gifvideo
├─────────────────────
│👑 *Owner:*
│• .owner
│• .setmenuowner
├─────────────────────
│👻 *Anime*
│• .kiss
│• .kill
├─────────────────────
│📖 *Biblia*
│• .versículo
│• .historia
╰─────────────────────
🚀 *Gatoland Bot by Danielrxz*`;

  const imagen = 'https://qu.ax/RdtUa.jpg';
  await conn.sendFile(m.chat, imagen, 'menu.jpg', menu, m);
;

handler.command = /^menu|help/i;
handler.help = ['menu'];
handler.tags = ['main'];

export default handler;