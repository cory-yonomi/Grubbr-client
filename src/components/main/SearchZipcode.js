import { useEffect, useState } from "react"
import { Navigate } from 'react-router-dom';
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
    const submit = (e) => {
        e.preventDefault()
        // console.log('submit value', input)
        setSubValue(input)
        if (input.length === 5) {
            axios.get(`http://localhost:8000/restaurants/Yelp/${input}`, {
                headers: {
                    "Authorization": `Bearer ${props.user.token}`
                }
            })
                // maybe use filter function
                .then(foundRestaurants => {
                    // console.log('rests', foundRestaurants)
                    props.setRestaurants(foundRestaurants.data.businesses)
                })
                .catch(err => console.log(err))
                return <Navigate to='/restaurant-slide' />
        } else {
            return alert('wtf')
        }

    }

    return (
        <div className="rest-slide">
            <div>
                <div id='zipcode-search'>
                    <form>
                        <label htmlFor="zipcode">Search by Zipcode:</label>
                        <input type="number" onChange={handleChange} />
                        <button className='submitbutton' onClick={submit}>Submit</button>
                    </form>
                    {/* <Link to='/restaurant-slide'></Link> */}
                </div>
            </div>
        </div>
    )
}

export default SearchZipcode