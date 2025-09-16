const historias = [
  "🦁 *Daniel en el foso de los leones* — Daniel fue arrojado a un foso lleno de leones 🦁 por orar a Dios, ¡pero Dios cerró la boca de los leones y lo protegió! 🙏 (Daniel 6)",
  "🌊 *La apertura del Mar Rojo* — Moisés alzó su vara y el Mar Rojo se abrió en dos 🌊 permitiendo que el pueblo de Israel escapara de Egipto 🇪🇬. ¡Dios hizo un milagro! ✨ (Éxodo 14)",
  "🛳️ *El Arca de Noé* — Dios le dijo a Noé que construyera un arca 🛶 antes de que viniera el diluvio 🌧️. Noé obedeció y salvó a su familia y a los animales 🐘🐓🐶. (Génesis 6-9)",
  "👑 *David y Goliat* — Un joven pastor llamado David venció al gigante Goliat 🪨 con solo una piedra y su fe en Dios. ¡Nada es imposible para Él! 💪 (1 Samuel 17)",
  "🔥 *Sadrac, Mesac y Abed-nego* — Estos tres jóvenes fueron lanzados a un horno ardiente 🔥 por no adorar una estatua, pero Dios los protegió y ni siquiera olieron a humo! 😇 (Daniel 3)",
  "🍼 *El nacimiento de Jesús* — En Belén nació Jesús, el Salvador del mundo 👶🌟. Los ángeles cantaron y los pastores celebraron su llegada. ✨ (Lucas 2)",
  "🧍‍♂️ *Jonás y el gran pez* — Jonás desobedeció a Dios y fue tragado por un pez gigante 🐋. Oró, se arrepintió y fue liberado. ¡Siempre hay segundas oportunidades! 🤲 (Jonás 1-2)",
  "💧 *El bautismo de Jesús* — Juan el Bautista bautizó a Jesús en el río Jordán 💦 y el cielo se abrió diciendo: 'Este es mi Hijo amado' 🕊️ (Mateo 3:13-17)",
  "🍎 *Adán y Eva* — Los primeros humanos vivían en el Edén 🏞️ pero desobedecieron a Dios al comer del fruto prohibido 🍏. Así entró el pecado en el mundo. (Génesis 3)",
  "👁️ *La caída de Jericó* — Josué y los israelitas rodearon la ciudad de Jericó durante 7 días 🏰, tocaron las trompetas 🎺 y los muros cayeron por el poder de Dios! 🙌 (Josué 6)",
];

const handler = async (m) => {
  const historia = historias[Math.floor(Math.random() * historias.length)];
  m.reply(historia);
};

handler.command = ['historia'];
handler.tags = ['religión'];
handler.help = ['historia'];
handler.group = false;

export default handler;