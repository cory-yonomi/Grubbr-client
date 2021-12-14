import { useEffect } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"

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
                    <label htmlFor="">Search by Zipcode:</label>
                    <input type="text" />
                </form>
            </div>
            <div className='rest-slide'>
                <button onClick={props.nextButton}>X</button>
            </div>
            <div className='heart-button'>
                <Link to='/restaurant-profile'><button onClick={props.heartButton}>❤️</button></Link>
            </div>

            <div className='map-restaurants'>
                {props.mapRestaurants}
            </div>

        </div>
    )





}

export default RestaurantSlide