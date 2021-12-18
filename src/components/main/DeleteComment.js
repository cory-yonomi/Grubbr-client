// import axios from "axios"
// import { useState } from "react"
// import RestaurantProfile from "./RestaurantProfile"
// import apiUrl from "../../apiConfig"
// import { useNavigate } from 'react-router-dom'

// const DeleteComment = (props) => {

//     const navigate = useNavigate()

//     const deleteYourComment = (e) => {
//         e.preventDefault()

//         axios.delete(`${apiUrl}/comments/${props.likedRestaurant._id}/${props.commentIdArray}`, {
           
//                 headers: {
//                     "Authorization": `Bearer ${props.user.token}`
//                 },
//             }
//         )
//             .then(comment => {
//                 props.setComment(comment)
//                 console.log('COMMENT DELETED', comment)
//             })
//             // .then(() => navigate('/profile'))
//             .catch(err => console.log(err))
//     }



//     return (
//         <form action="">
//             <label htmlFor="">Delete a comment:</label>
//             <button onClick={deleteYourComment}>Delete</button>
//         </form>
//     )
// }

// export default DeleteComment