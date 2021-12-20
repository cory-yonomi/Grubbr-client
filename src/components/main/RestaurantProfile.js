import axios from 'axios'
// import { useEffect, useState } from 'react'
// import apiUrl from '../../apiConfig'
import '../css/RestaurantProfile.css'
import CreateComment from './CreateComment'
import { useNavigate } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import drakeImg from '../images/DrakeExampleImg.jpeg'
import Plus from '../images/icon.png'

const priceStyle = {
    color: 'lightgreen'
}

const hoursStyle = {
    color: 'Yellow',
	fontWeight: 'bold',
}

const RestaurantProfile = (props) => {

	const navigate = useNavigate()


	const deleteYourComment = (e) => {
		e.preventDefault()

		axios
			.delete(
				`${apiUrl}/comments/${props.likedRestaurant._id}/${e.target.id}`,
				{
					headers: {
						Authorization: `Bearer ${props.user.token}`,
					},
				}
			)
			.then(restaurant => {
				console.log('rest info', restaurant)
				props.setLikedRestaurant(restaurant.data)
			})
			.catch((err) => console.log(err))
	}

	const commentArray = props.likedRestaurant.comments.map((comment) => {
		// console.log('comment body', comment)
		return (
			<div className='commentDiv'>
				<p>{comment.body}</p>
					<button className='commentButton' id={comment._id} onClick={deleteYourComment}>
						Delete
					</button>
			</div>
		)
	})

	const mapCategories = console.log(props.likedRestaurant)

	// console.log('array of users', props.likedRestaurant.users)
	// console.log('likedRestaurant', props.likedRestaurant)

	const likersArray = props.restaurantLikers.map((liker) => {
		console.log('likers', liker)
		return (
			<div className="likerDiv">
				<p className="likerName">{liker.firstName}</p>
				<button className='plusButton' value={liker.userId} onClick={props.addPendingMatch}><img src={Plus} alt='add a match' /></button>
			</div>
		)
	})

	return (
		<div className="restaurantsProfile">
            <div className='profileContainerDiv'>
			<div className="profileContainer">
				<h1>{props.likedRestaurant.name}</h1>
				<img
					src={props.likedRestaurant.image_url}
					alt={props.likedRestaurant.name}
				/>
				<h4>{mapCategories}</h4>
				<h6>Cuisine: {props.likedRestaurant.categories}</h6>
				<h6>Address: {props.likedRestaurant.location} </h6>
				<h6>Rating: {props.likedRestaurant.rating}</h6>
				<h6 style={priceStyle}>Price Rating: {props.likedRestaurant.price}</h6>
			</div>
            </div>
			<div className="bottomDiv">
				<span className="othersLiked">
					<h3>Others Who Liked This Restaurant:</h3>
					{likersArray}
				</span>
				<span className="othersReview">
					<h3>Restaurant Reviews From Other Users:</h3>
					<CreateComment
						comment={props.postComment}
						user={props.user}
						setComment={props.setComment}
						commentInput={props.commentInput}
					/>
					{commentArray}
				</span>
			</div>
		</div>
	)
}

export default RestaurantProfile
