import "./card.css";
import PropTypes from "prop-types";

function Card({ src, headline, text, githubLink, liveLink }) {
  return (
    <div className="card">
      <img src={src} alt="" className="screenShot" />
      <div className="cardTextArea">
        <h3 className="cardHeadline">{headline}</h3>
        <p className="cardText">{text}</p>
        {githubLink ? <div><a href={githubLink}>Github</a></div> : null}
        {liveLink ? <div><a href={liveLink}>Live preview</a></div> : null}
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