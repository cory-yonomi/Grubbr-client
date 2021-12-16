import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import '../css/RestaurantSlide.css'
import Heart from '../images/HeartRestaurant.png'

const ButtonStyle = {
    width: '100px',
    height: '100px'
}

const RestaurantSlide = (props) => {

        return (
            <div className='slide-page'>
                <div className='map-restaurants'>
                <div >
                    {props.mapRestaurants}
                </div>
                </div>
                <div className='heart-button'>
                    <button className='swipeButton' onClick={props.nextButton}>X</button>
                    <Link to='/restaurant-profile'><button className='swipeButton' onClick={props.heartButton}><img style={ButtonStyle} src={Heart} alt="Like Restaurant Button" /> </button></Link>
                </div>
            </div >
        )

    }

export default RestaurantSlide