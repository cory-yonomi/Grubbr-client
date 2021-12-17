import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../css/RestaurantSlide.css";
import Heart from "../images/HeartRestaurant.png";
import brokenHeart from "../images/disheartRestaurant.png";

const ButtonStyle = {
  width: "85px",
  height: "85px",
  margin: "10px",
};

const backgroundColor = {
    backgroundColor: `rgba(93, 130, 51, .8)`,
    height: '100vh',
    padding: '2.5%'
}

const RestaurantSlide = (props) => {
  return (
    <div className="slide-page">
      <div style={backgroundColor}>
        <div className="map-restaurants">
          <div>{props.mapRestaurants}</div>
        </div>
        <div>
          <button className="swipeButton" onClick={props.nextButton}>
            <img
              src={brokenHeart}
              style={ButtonStyle}
              alt="Dislike Restaurant Button"
            />
          </button>
          <Link to="/restaurant-profile">
            <button className="swipeButton" onClick={props.heartButton}>
              <img
                style={ButtonStyle}
                src={Heart}
                alt="Like Restaurant Button"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSlide;
