import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

const UserProfile = (props) => {

    const [user, setUser] = useState([])

    // get ONE users SPECIFIC profile
    axios.get(`http://localhost:8000/profile/${props.user._id}`, {
        headers: {
            "Authorization": `Bearer ${props.user.token}`
        }
    })
        .then(profile => {
            // console.log('this is the ONE USERS profile', profile.data.firstName)
            setUser(profile.data.firstName)
        })
        .catch(err => console.log(err))

    return (
        <div>
            <Link to='/edit-profile'><small>Edit Profile</small></Link>
            <Link to='/delete-profile'><small>Delete Profile</small></Link>
            <h1>{user}</h1>
        </div>
    )


}

export default UserProfile