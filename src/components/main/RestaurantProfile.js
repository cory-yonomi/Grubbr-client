// import axios from 'axios'
// import { useEffect } from 'react'
// import '../css/RestaurantProfile.css'
// import CreateComment from './CreateComment'

// const RestaurantProfile = (props) => {
//     const restaurantCategories = props.likedRestaurant.categories
//     const mapCategories = console.log(props.likedRestaurant)

//     const mapUsers = 

//     useEffect(() => {
//         const ids = props.likedRestaurant.users.map(user => {
//             console.log('user ar', user)
//             return user
//         })

//         axios.get(`http://localhost:8000/profile/${props.user._id}`, {
//             headers: {
//                 "Authorization": `Bearer ${props.user.token}`
//             }
//         },
//             {
//                 body: {
//                     userIds: ids
//                 }
//             }
//        )
//     }, [])

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
//                 <CreateComment comment={props.postComment}/>
//             </div>
//             </div>
//             </div>
//     )
// }


// export default RestaurantProfile

import CreateComment from "./CreateComment"

const RestaurantProfile = (props) => {
    const restaurantCategories = props.likedRestaurant.categories
    const mapCategories = console.log(props.likedRestaurant)
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
        </div>
    )
}


export default RestaurantProfile