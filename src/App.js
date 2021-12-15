// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import RestaurantSlide from './components/main/RestaurantSlide'
import RestaurantSlider from './components/css/RestaurantSlider.css'
import RestaurantProfile from './components/main/RestaurantProfile'

import axios from 'axios'
require('dotenv').config()


const App = () => {


	const [user, setUser] = useState(null)
	const [msgAlerts, setMsgAlerts] = useState([])
	const [restaurants, setRestaurants] = useState([])
	// sets current restaurant for the slideshow
	const [currentRest, setCurrentRest] = useState(0)
	const [likedRestaurant, setLikedRestaurant] = useState({})


	console.log('user in app', user)
	console.log('message alerts', msgAlerts)
	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id))
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
			)
		})
	}

	// const restaurantCall = () => {
	// 	return axios.post(`http://localhost:8000/restaurants`,
	// 		{
	// 			name: restaurants[currentRest].name,
	// 			location: restaurants[currentRest].location.display_address,
	// 			yelpId: restaurants[currentRest].id,
	// 			categories: restaurants[currentRest].categories,
	// 			image_url: restaurants[currentRest].image_url,
	// 			rating: restaurants[currentRest].rating,
	// 			price: restaurants[currentRest].price,
	// 			user: [user._id]
	// 		},
	// 		{
	// 			headers: {
	// 				"Authorization": `Bearer ${user.token}`
	// 			}
	// 		}
	// 	)
	// }

	// const profileCall = (userId) => {
	// 	return axios.patch(`http://localhost:8000/profile/${userId}`,
	// 		{
	// 			userId: user._id,
	// 			restaurant: restaurants[currentRest].id
	// 		},
	// 		{
	// 			headers: {
	// 				"Authorization": `Bearer ${user.token}`
	// 			}
	// 		}
	// 	)
	// }

	const heartButton = () => {
		axios.post(`http://localhost:8000/restaurants`,
			{
				name: restaurants[currentRest].name,
				location: restaurants[currentRest].location.display_address,
				yelpId: restaurants[currentRest].id,
				categories: restaurants[currentRest].categories,
				image_url: restaurants[currentRest].image_url,
				rating: restaurants[currentRest].rating,
				price: restaurants[currentRest].price,
				user: [user._id]
			},
			{
				headers: {
					"Authorization": `Bearer ${user.token}`
				}
			}
		)
			.then(resp => {
			console.log(resp)
			setLikedRestaurant(resp.data)
		})	
	}

	// maps yelp restaurants in a slideshow
	const nextButton = () => {
		setCurrentRest(currentRest === length - 1 ? 0 : currentRest + 1)
	}
	// console.log('current', currentRest)

	// maps through restaurants from Yelp API
	const mapRestaurants = restaurants.map((r, index) => {
		// console.log('mapping rs', r)
		return (
			<div>
				<div
				className={index === currentRest ? 'r active' : 'r'}
				key={index}
				>
					{index === currentRest && (
						<div>
						<p>{r.name}</p>
						<img src={r.image_url} alt='restaurant-images' className='image'/>
						</div>
					)}
				</div>
				<div className='restaurant-map'>
				</div>
			</div>
			
		)
	})

	const length = mapRestaurants.length

	// if (!Array.isArray(mapRestaurants) || mapRestaurants.length <= 0) {
	// 	return null
	// }

	return (
		<Fragment>
			<Header user={user} />
			<Routes>
				<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path='/sign-up'
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path='/sign-out'
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path='/change-password'
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
				/>
				<Route
					path='/restaurant-slide'
					element={
						<RequireAuth user={user}>
							<RestaurantSlide setRestaurants={setRestaurants} user={user} msgAlert={msgAlert} mapRestaurants={mapRestaurants} nextButton={nextButton} heartButton={heartButton} />
						</RequireAuth>}
						/>
						<Route
					path='/restaurant-profile'
					element={
						<RequireAuth user={user}>
							<RestaurantProfile setRestaurants={setRestaurants} user={user} msgAlert={msgAlert} mapRestaurants={mapRestaurants} likedRestaurant={likedRestaurant} heartButton={heartButton} />
						</RequireAuth>}
						/>
			</Routes>
			{msgAlerts.map((msgAlert) => (
				<AutoDismissAlert
					key={msgAlert.id}
					heading={msgAlert.heading}
					variant={msgAlert.variant}
					message={msgAlert.message}
					id={msgAlert.id}
					deleteAlert={deleteAlert}
				/>
			))}
		</Fragment>
	)
}

export default App

