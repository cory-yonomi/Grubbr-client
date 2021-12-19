// import axios from 'axios'
// import { useEffect, useState } from 'react'
// import apiUrl from '../../apiConfig'
import '../css/RestaurantProfile.css'
import CreateComment from './CreateComment'

const RestaurantProfile = (props) => {

    const commentArray = props.likedRestaurant.comments.map(comment => {
        return <p>{comment.body}</p>
    })

    const mapCategories = console.log(props.likedRestaurant)

    console.log('array of users', props.likedRestaurant.users)
    console.log('likedRestaurant', props.likedRestaurant)

    const likersArray = props.restaurantLikers.map(liker => {
        return (
            <div>
                <p className='likerName'>{liker.firstName}</p>
                <button onClick={props.addPendingMatch}>+</button>
            </div>
        )
    })

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
                    {likersArray}
                </div>
                <div className='othersReview'>
                    <h3>Restaurant Reviews From Other Users:</h3>
                    {commentArray}
                    <CreateComment comment={props.postComment} user={props.user} setComment={props.setComment} />
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default RestaurantProfile
