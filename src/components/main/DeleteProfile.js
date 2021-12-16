import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

const DeleteProfile = (props) => {

    const navigate = useNavigate()

    const deleteProfile = (e) => {
        e.preventDefault()

        axios.delete(`http://localhost:8000/profile/${props.user._id}`,
            {
                headers: {
                    "Authorization": `Bearer ${props.user.token}`
                },
            }
        )
            .then(response => {
                console.log('profile to delete', response)
            })
            .then(() => navigate('/create-profile'))
            .catch(err => console.log('error deleting', err))
    }

    return (
        <form>
            <label htmlFor="">Are you sure you want to delete your profile?</label>
            <br />
            <button className='deleteButton' onClick={deleteProfile}>Yes</button>
            <br />
            <Link to='/profile'><button className='noButton'>No</button></Link>
        </form>
    )
}

export default DeleteProfile