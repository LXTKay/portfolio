import "./mainPage.css"
import Card from "./Card.jsx";
import cardData from "./cardData.js";
import { v4 as uuid } from "uuid";

export default function MainPage() {
  const cards = cardData.map((card) => {
    return <Card
      key={uuid()}
      {...card}
    />
  })
  return (
    <>
      <div className="header">
        <h1>Portfolio</h1>
      </div>
      <div className="content">
        {cards}
      </div>
      <div className="footer">
        <p>2024</p>
      </div>
    </>
  )
}