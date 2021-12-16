import axios from "axios"
import { useState } from "react"

const UserProfile = (props) => {

    const [user, setUser] = useState([])

    // get ONE users SPECIFIC profile
    axios.get(`http://localhost:8000/profile/:profileId`, {
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
            <h1>{user}</h1>
        </div>
    )


}

export default UserProfile