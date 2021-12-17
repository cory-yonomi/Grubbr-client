import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import apiUrl from "../../apiConfig"

const CreateProfile = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [bio, setBio] = useState('')
    const [photo, setPhoto] = useState('')

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

    const bioInput = (e) => {
        // console.log('input value first name', e.target.value)
        setBio(e.target.value)
    }

    const photoInput = (e) => {
        // console.log('input value first name', e.target.value)
        setPhoto(e.target.value)
    }


    const submitProfile = (e) => {
        e.preventDefault()

        if (zipcode.length === 5) {
            axios.post(`${apiUrl}/profile`, {
                firstName: firstName,
                lastName: lastName,
                zipCode: zipcode,
                bio: bio,
                photo: photo,
            },
                {
                    headers: {
                        "Authorization": `Bearer ${props.user.token}`
                    },
                }
            )
                .then(profile => {
                    console.log('PROFILE CREATED', profile.data)
                    props.setProfile(profile.data)
                })
                .then(() => navigate('/search-zipcode'))
                .catch(err => console.log(err))
        } else {
            return alert('Please enter valid information')
        }
    }




    return (

        <div id='createProfile'>
            <form>
                <label htmlFor="Create Profile">Create Profile:</label>
                <label htmlFor="First Name">First Name:</label>
                <input type="text" onChange={firstNameInput} />
                <label htmlFor="Last Name">Last Name:</label>
                <input type="text" onChange={lastNameInput} />
                <label htmlFor="Zip Code">Zip Code:</label>
                <input type="number" onChange={zipCodeInput} />
                <label htmlFor="Bio">Bio:</label>
                <input type="text" onChange={bioInput} />
                <label htmlFor="Profile Photo">Profile Photo:</label>
                <input type="text" onChange={photoInput} />
                <button className='submitProfile' onClick={submitProfile}>Submit</button>
            </form>
        </div>
    )

}

export default CreateProfile