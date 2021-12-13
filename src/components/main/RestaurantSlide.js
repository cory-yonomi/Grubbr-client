import { useEffect } from "react"
import axios from "axios"

const RestaurantSlide = (props) => {

    useEffect(() => {
        axios.get('http://localhost:8000/restaurants/Yelp/11422', {
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
                <button>❤️</button>
            </div>

        </div>
    )





}

export default RestaurantSlide