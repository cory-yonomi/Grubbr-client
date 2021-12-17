import '../css/DeleteProfile.css'
import axios from "axios"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"
import apiUrl from '../../apiConfig'

const DeleteProfile = (props) => {

    const navigate = useNavigate()

    const deleteProfile = (e) => {
        e.preventDefault()

        axios.delete(`${apiUrl}/profile/${props.user._id}`,
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
        <form className='deleteProfile'>
            <h2>Are you sure you want to delete your profile?</h2>
            <br />
            <button className='deleteButton' onClick={deleteProfile}>Yes</button>
            <Link to='/profile'><button className='noButton'>No</button></Link>
        </form>
    )
}

export default DeleteProfile