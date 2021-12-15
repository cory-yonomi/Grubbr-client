import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"


const SearchZipcode = (props) => {

    const [input, setInput] = useState('')
    const [subValue, setSubValue] = useState('')

    // gets value of each number typed in the input zipcode field
    const handleChange = (e) => {
        // console.log('input value', e.target.value)
        setInput(e.target.value)
    }

    // gets whole value of zipcode entered once submit is clicked and searches for restaurants specfic to that zipcode
    const submit = () => {
        // console.log('submit value', input)
        setSubValue(input)
        axios.get(`http://localhost:8000/restaurants/Yelp/${input}`, {
            headers: {
                "Authorization": `Bearer ${props.user.token}`
            }
        })
            .then(foundRestaurants => {
                // console.log('rests', foundRestaurants)
                props.setRestaurants(foundRestaurants.data.businesses)
            })
            .catch(err => console.log(err))

    }

    return (
        <div className="rest-slide">
            <div>
                <div id='zipcode-search'>
                    <form>
                        <label htmlFor="zipcode">Search by Zipcode:</label>
                        <input type="number" onChange={handleChange} />
                    </form>
                    <Link to='/restaurant-slide'><button className='submitbutton' onClick={submit}>Submit</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SearchZipcode