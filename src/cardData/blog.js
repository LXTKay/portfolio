import imgURL from "./screenshots/blog.jpg";

const card = {
  src: imgURL,
  headline: "Blog Website",
  text: `Das hier ist eine Blog App. Sie besitzt zwei verschiedene Frontends. Der Drehpunkt bei dieser \
  Applikation ist die Benutzung, bzw. die Bereitstellung von APIs. Ein Frontend ist für den gemeinen User, \
  dieser kann die veröffentlichten Blogposts ansehen und Kommentare hinterlassen. Das zweite Frontend für \
  Autoren kann natürlich das volle Programm, sofern eingeloggt. Die Verifizierung erfolgt über JWToken. \
  Die App besteht aus React, Express und MongoDB.
  
  Anmerkung:
  Das Backend braucht ein paar Sekunden zum Starten, da ich einen kostenlosen Host nutze.`,
  githubLink: "https://github.com/LXTKay/blogBackEnd",
  liveLink: "https://astounding-syrniki-fb1750.netlify.app/"
};

export default card;