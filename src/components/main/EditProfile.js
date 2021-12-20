import '../css/EditProfile.css'
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../apiConfig'

const EditProfile = (props) => {
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
        setPhoto(e.target.files[0])
    }

    const uploadHandler = (e) => {
        e.preventDefault()
        console.log(photo.selectedFile)
    }

    const submitProfile = (e) => {
        e.preventDefault()

        if (zipcode.length === 5) {
            axios.patch(`${apiUrl}/profile/${props.user._id}`, {
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
                <h3 htmlFor="First Name">First Name: </h3>
                <input type="text" onChange={firstNameInput} />
                <br/>
                <h3 htmlFor="Last Name">Last Name: </h3>
                <input type="text" onChange={lastNameInput} />
                <br/>
                <h3 htmlFor="Zip Code">Zip Code: </h3>
                <input type="number" onChange={zipCodeInput} />
                <br/>
                <h3 htmlFor="Bio">Bio: </h3>
                <input type="text" onChange={bioInput} />
                <br/>
                <div>
                <h3 htmlFor="Profile Photo">Profile Photo: </h3>
                <input type="file" onChange={photoInput} />
                <button onclick={uploadHandler}>Upload!</button>
                </div>
                <br/>
                <button className='submitProfile' onClick={submitProfile}>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default EditProfile