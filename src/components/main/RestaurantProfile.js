import axios from 'axios'
import { useEffect, useState } from 'react'
import '../css/RestaurantProfile.css'
import CreateComment from './CreateComment'

const RestaurantProfile = (props) => {

    

    const restaurantCategories = props.likedRestaurant.categories
    const mapCategories = console.log(props.likedRestaurant)

    const mapUsers = props.likedRestaurant.users
    console.log('array of users', props.likedRestaurant.users)

    useEffect(() => {
  

        axios.get(`http://localhost:8000/profile/restaurantLikers`, {
            headers: {
                "Authorization": `Bearer ${props.user.token}`
            }
        },
            {
                body: {
                    userIds: props.restaurantLikers
                }
            }
       )
       .then(resp => console.log('response!', resp))
    }, [])

    return (

        <div className='restaurantsProfile'>
            <div className='profileContainer'>
                <h1>{props.likedRestaurant.name}</h1>
                <img src={props.likedRestaurant.image_url} alt={props.likedRestaurant.name} />
                <h4>{mapCategories}</h4>
                <h6>Cuisine: {props.likedRestaurant.categories}</h6>


                {/* <h6>Address: {props.likedRestaurant.location[0]}, {props.likedRestaurant.location[1]}</h6> */}


                <h6>Rating: {props.likedRestaurant.rating}</h6>
                <h6>Price Rating: {props.likedRestaurant.price}</h6>
            </div>
            <div className='bottomDiv'>
            <div className='othersLiked'>
                <h3>Others Who Liked This Restaurant:</h3>
            </div>
            <div className='othersReview'>
                <h3>Restaurant Reviews From Other Users:</h3>


                <CreateComment comment={props.postComment} setComment={props.setComment} user={props.user}/>


            </div>
            </div>
    )
}


export default RestaurantProfile

// import CreateComment from "./CreateComment"

// const RestaurantProfile = (props) => {
//     const restaurantCategories = props.likedRestaurant.categories
//     const mapCategories = console.log(props.likedRestaurant)
//     return (

//         <div className='restaurantsProfile'>
//             <div className='profileContainer'>
//                 <h1>{props.likedRestaurant.name}</h1>
//                 <img src={props.likedRestaurant.image_url} alt={props.likedRestaurant.name} />
//                 <h4>{mapCategories}</h4>
//                 <h6>Cuisine: {props.likedRestaurant.categories}</h6>

//                 {/* <h6>Address: {props.likedRestaurant.location[0]}, {props.likedRestaurant.location[1]}</h6> */}

//                 <h6>Rating: {props.likedRestaurant.rating}</h6>
//                 <h6>Price Rating: {props.likedRestaurant.price}</h6>
//             </div>
//             <div className='bottomDiv'>
//             <div className='othersLiked'>
//                 <h3>Others Who Liked This Restaurant:</h3>
//             </div>
//             <div className='othersReview'>
//                 <h3>Restaurant Reviews From Other Users:</h3>
//                 <CreateComment comment={props.postComment} setComment={props.setComment} user={props.user}/>
//             </div>
//             </div>
//         </div>
//     )
// }


// export default RestaurantProfile