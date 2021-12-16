import '../css/EditProfile.css'
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

        <div className='editProfile'>
            <div>
            <form className='editForm'>
                <h1>Edit Profile</h1>
                <label htmlFor="First Name">First Name: </label>
                <br/>
                <input type="text" onChange={firstNameInput} />
                <br/>
                <label htmlFor="Last Name">Last Name: </label>
                <br/>
                <input type="text" onChange={lastNameInput} />
                <br/>
                <label htmlFor="Zip Code">Zip Code: </label>
                <br/>
                <input type="number" onChange={zipCodeInput} />
                <br/>
                <button className='submitProfile' onClick={submitProfile}>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default EditProfile