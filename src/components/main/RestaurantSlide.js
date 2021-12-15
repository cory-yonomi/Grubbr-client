import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import './RestaurantSlider.css'


const RestaurantSlide = (props) => {

        return (
            <div>
                <div className='rest-slide'>
                    <button onClick={props.nextButton}>X</button>
                </div>
                <div className='heart-button'>
                    <Link to='/restaurant-profile'><button onClick={props.heartButton}>❤️</button></Link>
                </div>
                <div className='map-restaurants'>
                    {props.mapRestaurants}
                </div>
            </div >
        )

    }

export default RestaurantSlide

