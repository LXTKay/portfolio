import "./card.css";
import PropTypes from "prop-types";
import Icon from '@mdi/react';
import { mdiEarth, mdiGithub } from '@mdi/js';

function Card({ src, headline, text, githubLink, liveLink }) {
  return (
    <div className="card">
      <img src={src} alt="" className="screenShot" />
      <div className="cardTextArea">
        <h3 className="cardHeadline">{headline}</h3>
        <p className="cardText">{text}</p>
        {githubLink ? <div className="linkContainer">
          <Icon
            path={mdiGithub}
            size={1}
            color="gray" />
          <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
        </div> : null}
        {liveLink ? <div className="linkContainer">
          <Icon
            path={mdiEarth}
            size={1}
            color="gray" />
          <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Preview</a>
        </div> : null}
      </div>
    </div>
  )
};

Card.propTypes = {
  src: PropTypes.string,
  headline: PropTypes.string,
  text: PropTypes.string,
  githubLink: PropTypes.string,
  liveLink: PropTypes.string
};

export default Card;