import "./introBox.css";
import Icon from '@mdi/react';
import { mdiGithub } from "@mdi/js";

export default function IntrooBox() {
  return (
    <div className="img">
      <div className="introBox">
        <h2>Herzlich Willkommen auf meinem Portfolio</h2>
        <p>Hier finden Sie alle meine Projekte, die ich in irgendeiner Weise als zeigenswert erachte. Das Ganze ist
          chronologisch geordnet. Bei jedem Eintrag
          finden Sie einen Link zur Live-Seite und zum Github Repo. Falls Sie zufällig hier gelandet sind und noch einen
          Fullstack Entwickler brauchen, schreiben Sie mir eine Nachricht, ich suche gerade Arbeit!
        </p>
        <a href="https://github.com/LXTKay" target="_blank" rel="noopener noreferrer">
          <Icon path={mdiGithub} size={2} color="white" className="icon" />
        </a>
      </div>
    </div>
  )
};