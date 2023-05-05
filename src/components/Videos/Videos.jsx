import React from 'react';
import Card from "../../components/Card/Card";
import "./Videos.css";

const Videos = ({ cards }) => {
  return (
    <div className="videos">
      {cards.map((card, index) => {
        return (
          <Card 
            id={card._id}
            title={card.title}
            img={card.img}
            views={card.views}
            key={index}
          />
        )       
      })}
    </div>
  )
};

export default Videos;