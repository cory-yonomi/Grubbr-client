import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/RestaurantSlide.css";
import Heart from "../images/HeartRestaurant.png";
import brokenHeart from "../images/disheartRestaurant.png";

const ButtonStyle = {
  width: "100px",
  height: "100px",
  margin: '10px'
};

const RestaurantSlide = (props) => {
  return (
    <div className="slide-page">
      <div className="map-restaurants">
        <div>{props.mapRestaurants}</div>
      </div>
          <div className='dislikeButton'>
        <button className="swipeButton" onClick={props.nextButton}>
          <img
            src={brokenHeart}
            style={ButtonStyle}
            alt="Dislike Restaurant Button"
          />
        </button>
        <Link to="/restaurant-profile">
          <button className="swipeButton" onClick={props.heartButton}>
            <img style={ButtonStyle} src={Heart} alt="Like Restaurant Button" />
          </button>
        </Link>
    
      </div>
    </div>
  );
};

export default RestaurantSlide;
