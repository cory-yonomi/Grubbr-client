import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import '../css/SeachZipcode.css'
import apiUrl from "../../apiConfig"

const SearchZipcode = (props) => {

    const [input, setInput] = useState('')
    const [subValue, setSubValue] = useState('')

    const navigate = useNavigate()

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
            axios.get(`${apiUrl}/restaurants/Yelp/${input}`, {
                headers: {
                    "Authorization": `Bearer ${props.user.token}`
                }
            })
                // maybe use filter function
                .then(foundRestaurants => {
                    // console.log('rests', foundRestaurants)
                    props.setRestaurants(foundRestaurants.data.businesses)
                })
                .then(() => navigate('/restaurant-slide'))
                .catch(err => console.log(err))
                
        } else {
            return alert('Please enter a valid zipcode')
        }

    }

    useEffect(() => {
        axios.get(`http://localhost:8000/profile/${props.user._id}`, {
            headers: {
                "Authorization": `Bearer ${props.user.token}`
            }
        })
			.then(foundProfile => {
                console.log('set propf', foundProfile.data)
                props.setProfile(foundProfile.data)
                props.setPendingMatches(foundProfile.data.pendingMatches)
                props.setMatches(foundProfile.data.matchedUsers)
		})
	}, [])

    return (
        <div className="rest-slide">
                <div id='zipcode-search'>
                    <form>
                        <label htmlFor="zipcode">Search by Zipcode:</label>
                        <input type="number" onChange={handleChange} />
                        <br />
                        <button className='submitbutton' onClick={submit}>Submit</button>
                    </form>
                    {/* <Link to='/restaurant-slide'></Link> */}
                </div>
        </div>
    )
}

export default SearchZipcode