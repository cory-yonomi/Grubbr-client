import axios from "axios"
import { useState } from "react"

const CreateProfile = (props) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [zipcode, setZipcode] = useState('')

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
            axios.post(`http://localhost:8000/profile`, {
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
                    console.log('PROFILE CREATED', profile.data)
                    props.setProfile(profile.data)
                })
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
                <button className='submitProfile' onClick={submitProfile}>Submit</button>
            </form>
        </div>
    )

}

export default CreateProfile