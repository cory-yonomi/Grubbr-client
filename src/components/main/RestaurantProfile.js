import axios from 'axios'
import { captureRejectionSymbol } from 'events'
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
                    {/* <p>{props.likedRestaurant.comments[2].body}</p> */}
                    <CreateComment 
                    comment={props.postComment} user={props.user} 
                    setComment={props.setComment}
                    />
            </div>
            </div>
            </div>
    )
}


export default RestaurantProfile