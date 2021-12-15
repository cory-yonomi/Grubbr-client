import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import '../css/RestaurantSlide.css'


const RestaurantSlide = (props) => {

        return (
            <div className='slide-page'>
                <div className='map-restaurants'>
                    {props.mapRestaurants}
                </div>
                <div className='heart-button'>
                    <button className='swipeButton' onClick={props.nextButton}>X</button>
                    <Link to='/restaurant-profile'><button className='swipeButton' onClick={props.heartButton}>❤️</button></Link>
                </div>
            </div >
        )

    }

export default RestaurantSlide

