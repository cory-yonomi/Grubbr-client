import { useEffect } from "react"
import axios from "axios"

const RestaurantSlide = (props) => {

    // useEffect(() => {
    //     axios.get('http://localhost:8000/restaurants', {
    //         headers: {
    //             "Authorization": `Bearer ${dbKey}`
    //         }
    //     })
    //         .then(foundRestaurants => {
    //             console.log('rests', foundRestaurants)
    //             setRestaurants(foundRestaurants)
    //         })
    //         .catch(err => console.log(err))
    // }, [])

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