import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

const EditProfile = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zipcode, setZipcode] = useState('')

    const navigate = useNavigate()

    // gets value of each thing typed in the input field for first name
    const firstNameInput = (e) => {
        // console.log('input value first name', e.target.value)
        setFirstName(e.target.value)
    }

    // gets value of each thing typed in the input field for last name
    const lastNameInput = (e) => {
        // console.log('input value first name', e.target.value)
        setLastName(e.target.value)
    }

    // gets value of each thing typed in the input field for zipcode
    const zipCodeInput = (e) => {
        // console.log('input value first name', e.target.value)
        setZipcode(e.target.value)
    }


    const submitProfile = (e) => {
        e.preventDefault()

        if (zipcode.length === 5) {
            axios.patch(`http://localhost:8000/profile/${props.user._id}`, {
                firstName: firstName,
                lastName: lastName,
                zipCode: zipcode,
            },
                {
                    headers: {
                        "Authorization": `Bearer ${props.user.token}`
                    },
                }
            )
                .then(profile => {
                    console.log('PROFILE EDITED', profile.data)
                    props.setProfile(profile.data)
                })
                .then(() => navigate('/profile'))
                .catch(err => console.log(err))
        } else {
            return alert('Please enter valid information')
        }
    }

    return (

        <div id='editProfile'>
            <form>
                <label htmlFor="Edit Profile">Edit Profile:</label>
                <label htmlFor="First Name">First Name:</label>
                <input type="text" onChange={firstNameInput} />
                <label htmlFor="Last Name">Last Name:</label>
                <input type="text" onChange={lastNameInput} />
                <label htmlFor="Zip Code">Zip Code:</label>
                <input type="number" onChange={zipCodeInput} />
                <button className='submitProfile' onClick={submitProfile}>Submit</button>
            </form>
        </div>
    )
}

export default EditProfile