import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import './RestaurantSlider.css'
const RestaurantSlide = (props) => {

    const [input, setInput] = useState('')
    const [subValue, setSubValue] = useState('')

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

    const handleChange = (e) => {
        console.log('input value', e.target.value)
        setInput(e.target.value)
    }

    const submit = () => {
        console.log('submit value', input)
        setSubValue(input)
    }

    if (!subValue) {
        return (
            <div className="rest-slide">
<div>
                <div id='zipcode-search'>
                    <form>
                        <label htmlFor="zipcode">Search by Zipcode:</label>
                        <input type="number" onChange={handleChange} />
                    </form>
                    <button onClick={submit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    } else {
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
}

export default RestaurantSlide

