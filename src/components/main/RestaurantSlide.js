import { useEffect } from "react"
import axios from "axios"
import RestaurantSlider from '../css/RestaurantSlider.css'

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
        <div>

            <div id='zipcode-search'>
                <form action="">
                    <label htmlFor="">Search by Zipcode:</label>
                    <input type="text" />
                </form>
            </div>
            <div id='rest-slide'>
                <button>X</button>
                <button onClick={props.nextSlide}>❤️</button>
            </div>
            <div>
                {props.mapRestaurants}
            </div>

        </div>
    )





}

export default RestaurantSlide