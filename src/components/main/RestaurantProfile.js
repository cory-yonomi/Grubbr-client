import axios from 'axios'
import { captureRejectionSymbol } from 'events'
import { useEffect, useState } from 'react'
import '../css/RestaurantProfile.css'
import CreateComment from './CreateComment'
import apiUrl from '../../apiConfig'
import drakeImg from '../images/DrakeExampleImg.jpeg'

const RestaurantProfile = (props) => {
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
			.then((comment) => {
				console.log('COMMENT DELETED', comment)
			})
			// .then(() => navigate('/profile'))
			.catch((err) => console.log(err))
	}

	const commentArray = props.likedRestaurant.comments.map((comment) => {
		// console.log('comment body', comment)
		return (
			<div>
				<p>{comment.body}</p>
				<p>
					<button id={comment._id} onClick={deleteYourComment}>
						Delete
					</button>
				</p>
			</div>
		)
	})

	// const commentIdArray = props.likedRestaurant.comments.map(comment => {
	//     console.log('comment body id array', comment._id)
	//     return (<p>{comment._id}</p>)
	// })

	// const restaurantCategories = props.likedRestaurant.categories
	// const mapCategories = console.log(props.likedRestaurant)

	// const mapUsers = props.likedRestaurant.users
	// console.log('array of users', props.likedRestaurant.users)
	// console.log('likedRestaurant', props.likedRestaurant)

	const likersArray = props.restaurantLikers.map((liker) => {
		// console.log('this is the array of likers', liker)
		return (
			<div className="likerDiv">
				<img src={drakeImg} alt="" srcset="" />
				<p>{liker.firstName} </p>
				<button>Add as Match</button>
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
				<h6>Cuisine: {props.likedRestaurant.categories}</h6>
				<h6>Address: {props.likedRestaurant.location}</h6>
				<h6>Rating: {props.likedRestaurant.rating}</h6>
				<h6>Price Rating: {props.likedRestaurant.price}</h6>
			</div>
            </div>
			<div className="bottomDiv">
				<div className="othersLiked">
					<h3>Others Who Liked This Restaurant:</h3>
					{likersArray}
				</div>
				<div className="othersReview">
					<h3>Restaurant Reviews From Other Users:</h3>
					{commentArray}
					<CreateComment
						comment={props.postComment}
						user={props.user}
						setComment={props.setComment}
					/>
					{/* <div> */}
						{/* <DeleteComment likedRestaurant={props.likedRestaurant} user={props.user} commentIdArray={commentIdArray} setComment={props.setComment} /> */}
					{/* </div> */}
				</div>
			</div>
		</div>
	)
}

export default RestaurantProfile
