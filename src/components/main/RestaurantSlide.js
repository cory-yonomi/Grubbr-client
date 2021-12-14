import { useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import './RestaurantSlider.css'
const RestaurantSlide = (props) => {

    useEffect(() => {
        axios.get('http://localhost:8000/restaurants/Yelp/92595', {
            headers: {
                "Authorization": `Bearer ${props.user.token}`
            }
        })
            .then(foundRestaurants => {
                // console.log('rests', foundRestaurants)
                props.setRestaurants(foundRestaurants.data.businesses)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="slide-page">

            <div id='zipcode-search'>
                <form action="">
                    <label htmlFor="" id='searchZip'>Search by Zipcode:</label>
                    <input type="text" />
                </form>
            </div>
            <div className='restaurantInfo'>
            </div>
            <div className='rest-slide'>
                <button onClick={props.nextButton}>X</button>
                <div className='heart-button'>
                    <Link to='/restaurant-profile'><button onClick={props.heartButton}>❤️</button></Link>
                </div>

                <div className='map-restaurants'>
                    {props.mapRestaurants}
                </div>

            </div>
        </div>
    )





}

export default RestaurantSlide