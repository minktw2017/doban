import React from "react";
import { Link } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Card.css";

const Card = ({id, title, img, views}) => {

  return (
    <Link to={`/video/${id}`}>
      <div className="card">
        <p>{title}</p>
        <img src={img} />
        <div className="views">
          <FavoriteIcon />
          <span>{views}</span>
        </div>
      </div>
    </Link>
  )
}

export default Card;