import imgURL from "./screenshots/photoTaggingApp.jpg";

const card = {
  src: imgURL,
  headline: "Photo Tagging App",
  text: `Dies ist eine Fullstack App, bei der man Personen auf einem Foto markieren kann, verpackt in einem \
  Spiel namens "Where is Waldo?". Mir ging es bei der Entwicklung vor allem darum, mit SQL Datenbanken \
  vertraut zu werden. Benutzt habe ich dafür PostgreSQL und Prisma. Das Backend ist mit Express und das Frontend \
  mit der vanilla Templating Language.

  Anmerkung:
  Es kann zur eingeschränkten Funktionalität kommen, wenn Sie es ausprobieren, da \
  da ich einen kostenlosen Host für die Datenbank nutzte.`,
  githubLink: "https://github.com/LXTKay/photoTaggingApp",
  liveLink: "https://delightful-nervous-butternut.glitch.me/"
};

export default card;