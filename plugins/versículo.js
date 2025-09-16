const versiculos = [
  "✨ Juan 3:16 - Porque de tal manera amó Dios al mundo...",
  "🕊️ Salmos 23:1 - El Señor es mi pastor, nada me faltará.",
  "🌿 Filipenses 4:13 - Todo lo puedo en Cristo que me fortalece.",
  "💖 Jeremías 29:11 - Porque yo sé los planes que tengo para ti...",
  "🔥 Isaías 41:10 - No temas, porque yo estoy contigo.",
  "🌟 Proverbios 3:5 - Confía en el Señor con todo tu corazón.",
  "🙏 Mateo 6:33 - Busquen primero el reino de Dios...",
  "🕊️ Romanos 8:28 - Todo obra para bien para los que aman a Dios.",
  "⚔️ Efesios 6:11 - Ponte toda la armadura de Dios.",
  "🌈 Génesis 1:1 - En el principio creó Dios los cielos y la tierra.",
  "❤️ Salmo 46:1 - Dios es nuestro amparo y fortaleza.",
  "✨ Mateo 11:28 - Venid a mí todos los que estáis cansados...",
  "🕊️ 1 Corintios 13:4 - El amor es paciente, es bondadoso...",
  "💡 Santiago 1:5 - Si alguno tiene falta de sabiduría, pídala a Dios.",
  "💖 Salmo 119:105 - Tu palabra es lámpara a mis pies.",
  "⚡ Hebreos 11:1 - La fe es la certeza de lo que se espera.",
  "🌿 Josué 1:9 - Sé fuerte y valiente.",
  "🌊 Salmo 91:1 - El que habita al abrigo del Altísimo...",
  "🌟 Romanos 10:9 - Si confiesas con tu boca que Jesús es el Señor...",
  "🙏 Marcos 11:24 - Todo lo que pidáis orando, creed que lo recibiréis.",
  "❤️ Salmo 37:4 - Deléitate en el Señor y Él te concederá tus deseos.",
  "🕊️ Proverbios 18:10 - Torre fuerte es el nombre del Señor.",
  "💪 Isaías 40:31 - Los que esperan en el Señor renovarán sus fuerzas.",
  "⚔️ Mateo 5:9 - Bienaventurados los pacificadores.",
  "💡 Juan 14:6 - Yo soy el camino, la verdad y la vida.",
  "🌿 Colosenses 3:23 - Haz todo como para el Señor.",
  "🔥 Salmo 34:8 - Gustad y ved que el Señor es bueno.",
  "🌈 Apocalipsis 3:20 - Yo estoy a la puerta y llamo...",
  "🕊️ Romanos 12:2 - No se conformen a este mundo...",
  "🙏 1 Tesalonicenses 5:17 - Orad sin cesar."
];

const handler = async (m) => {
  const versiculo = versiculos[Math.floor(Math.random() * versiculos.length)];
  m.reply(versiculo);
};

handler.command = ['versículo'];
handler.tags = ['religión'];
handler.help = ['versículo'];
handler.group = false;

export default handler;