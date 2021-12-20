// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
// import { Navigate } from 'react-router-dom'

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
import RestaurantProfile from './components/main/RestaurantProfile'
import SearchZipcode from './components/main/SearchZipcode'
import './components/css/RestaurantSlide.css'
import UserProfile from './components/main/UserProfile'
import CreateProfile from './components/main/CreateProfile'
import EditProfile from './components/main/EditProfile'
import DeleteProfile from './components/main/DeleteProfile'
import MatchesDisplay from './components/main/MatchesDisplay'
import apiUrl from './apiConfig'

import axios from 'axios'
require('dotenv').config()

//CSS Styling
const hoursStyle = {
	color: 'Yellow',
	fontWeight: 'bold',
}
const ratingStyle = {
	fontWeight: 'bold',
}

const App = () => {
	// APP STATE
	// current user, for auth
	const [user, setUser] = useState(null)
	// current user's profile
	const [profile, setProfile] = useState({})
	// ui messages
	const [msgAlerts, setMsgAlerts] = useState([])
	// array of restaurants in user's search
	const [restaurants, setRestaurants] = useState([])
	// sets current restaurant for the slideshow
	const [currentRest, setCurrentRest] = useState(0)
	// sets current selected restaurant to display
	const [likedRestaurant, setLikedRestaurant] = useState({
		name: '',
		location: [],
		yelpId: '',
		categories: [],
		image_url: '',
		rating: '',
		price: '',
		users: [],
		comments: [],
	})
	// restaurant comment state
	const [comment, setComment] = useState({ body: '', userId: null })
	// array of user profile objects who've liked a restaurant to display on restaurant slider
	const [restaurantLikers, setRestaurantLikers] = useState([])
	// user's pending matches
	const [pendingMatches, setPendingMatches] = useState([])
	// user's current matches
	const [matches, setMatches] = useState([])

	console.log('user in app', user)
	console.log('message alerts', msgAlerts)

	const clearUser = () => {
		console.log('clear user ran')
		setUser(null)
	}

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return prevState.filter((msg) => msg.id !== id)
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return [{ heading, message, variant, id }]
		})
	}

	// add a pending match to the user's array and update state
	const addPendingMatch = (e) => {
		e.preventDefault()
		axios.post(`${apiUrl}/pendingMatches/${profile._id}`,
			{
			senderProfile: e.target.value
			},
			{
				headers: {
					"Authorization": `Bearer ${user.token}`
				}
			}
		)
			.then(resp => {
				console.log('resp add pending match', resp)
				setPendingMatches(resp.data.pendingMatches)
			})
	}

	const postComment = (e) => {
		e.preventDefault()
		if (comment.body.length === 0) {
			return alert('Need to type something to post a comment!')
		} else {
			axios
				.post(
					`${apiUrl}/comments/${restaurants[currentRest].id}`,
					{
						comment: comment,
						restaurant: likedRestaurant,
					},
					{
						headers: {
							Authorization: `Bearer ${user.token}`,
						}
					}
				)
				.then((restaurant) => {
					setLikedRestaurant(restaurant.data)
					setComment({ body: '', userId: null })
				})
		}

	}
	// Request to post new restaurant or update existing restaurants user array
	const restaurantCall = () => {
		return axios.post(
			`${apiUrl}/restaurants`,
			{
				name: restaurants[currentRest].name,
				location: restaurants[currentRest].location.display_address,
				yelpId: restaurants[currentRest].id,
				categories: restaurants[currentRest].categories,
				image_url: restaurants[currentRest].image_url,
				rating: restaurants[currentRest].rating,
				price: restaurants[currentRest].price,
				user: [user._id],
			},
			{
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}
		)
	}

	const profileCall = (userId) => {
		return axios.patch(
			`${apiUrl}/profile/${userId}/liked`,
			{
				restaurant: restaurants[currentRest].id,
			},
			{
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			}
		)
	}

	// get ONE users SPECIFIC profile
	const profileName = () => {
		axios
			.get(`${apiUrl}/profile/:profileId`, {
				headers: {
					Authorization: `Bearer ${user.token}`,
				},
			})
			.then((profile) => {
				console.log('this is the ONE USERS profile', profile)
				setProfile(profile.data.firstName)
			})
			.catch((err) => console.log(err))
	}

	// when like button is clicked on restaurant show page
	const heartButton = () => {
		// request restaurant info and profile info of profiles in restaurant's user array
		Promise.all([restaurantCall(), profileCall(user._id)]).then((resp) => {
			console.log('promise.all response: \n', resp)
			setLikedRestaurant(resp[0].data.restaurant)
			setRestaurantLikers(resp[0].data.usersArray)
			console.log('liked rest users', restaurantLikers)
			console.log('liked rest!!!', resp[1].data.userId)
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
		console.log('this is restaurant', r.title)
		const mapRestaurantCategories = r.categories.map((c) => {
			return <p>{c.title}, </p>
		})

		return (
			<div className={index === currentRest ? 'r active' : 'r'} key={index}>
				{index === currentRest && (
					<div className="restaurantInfoDiv">
						<div className="mapImageDiv">
							<img
								src={r.image_url}
								alt="restaurant-images"
								className="mappedImage"
							/>
						</div>
						<h1>{r.name}</h1>
						{/* <h3>{r.categories.title}</h3> */}
						Cuisine: {mapRestaurantCategories}
						<br />
						Address: {r.location.display_address}
						<br />
						<p style={hoursStyle}>{r.is_closed ? 'Closed' : 'Open'}</p>
						<br />
						<p style={ratingStyle}>Rating: {r.rating}</p>
					</div>
				)}
			</div>
		)
	})

	const length = mapRestaurants.length

	return (
		<Fragment>
			<Header user={user} profile={profileName} />
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
			<Routes>
				<Route path="/" element={<Home msgAlert={msgAlert} user={user} />} />
				<Route
					path="/sign-up"
					element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path="/sign-in"
					element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
				/>
				<Route
					path="/sign-out"
					element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/change-password"
					element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>
					}
				/>
				<Route
					path="/restaurant-slide"
					element={
						<RequireAuth user={user}>
							<RestaurantSlide
								setRestaurants={setRestaurants}
								user={user}
								msgAlert={msgAlert}
								mapRestaurants={mapRestaurants}
								nextButton={nextButton}
								heartButton={heartButton}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path="/restaurant-profile"
					element={
						<RequireAuth user={user}>
							<RestaurantProfile
								setRestaurants={setRestaurants}
								user={user}
								msgAlert={msgAlert}
								mapRestaurants={mapRestaurants}
								setLikedRestaurant={setLikedRestaurant}
								likedRestaurant={likedRestaurant}
								heartButton={heartButton}
								postComment={postComment}
								setComment={setComment}
								restaurantLikers={restaurantLikers}
								addPendingMatch={addPendingMatch}
								commentInput={comment}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path="/profile"
					element={
						<RequireAuth user={user}>
							<UserProfile
								setRestaurants={setRestaurants}
								user={user}
								msgAlert={msgAlert}
								mapRestaurants={mapRestaurants}
								likedRestaurant={likedRestaurant}
								heartButton={heartButton}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path="/create-profile"
					element={
						<RequireAuth user={user}>
							<CreateProfile
								setRestaurants={setRestaurants}
								user={user}
								msgAlert={msgAlert}
								mapRestaurants={mapRestaurants}
								likedRestaurant={likedRestaurant}
								heartButton={heartButton}
								setProfile={setProfile}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path="/edit-profile"
					element={
						<RequireAuth user={user}>
							<EditProfile
								setRestaurants={setRestaurants}
								user={user}
								msgAlert={msgAlert}
								mapRestaurants={mapRestaurants}
								likedRestaurant={likedRestaurant}
								heartButton={heartButton}
								setProfile={setProfile}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path="/delete-profile"
					element={
						<RequireAuth user={user}>
							<DeleteProfile
								setRestaurants={setRestaurants}
								user={user}
								msgAlert={msgAlert}
								mapRestaurants={mapRestaurants}
								likedRestaurant={likedRestaurant}
								heartButton={heartButton}
								setProfile={setProfile}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path="/search-zipcode"
					element={
						<RequireAuth user={user}>
							<SearchZipcode
								setRestaurants={setRestaurants}
								user={user}
								msgAlert={msgAlert}
								mapRestaurants={mapRestaurants}
								likedRestaurant={likedRestaurant}
								setProfile={setProfile}
								setMatches={setMatches}
								setPendingMatches={setPendingMatches}
							/>
						</RequireAuth>
					}
				/>
				<Route
					path="/matches-display"
					element={
						<RequireAuth user={user}>
							<MatchesDisplay
								user={user}
								msgAlert={msgAlert}
								pendingMatches={pendingMatches}
								setPendingMatches={setPendingMatches}
								matches={matches}
								setProfile={setProfile}
							/>
						</RequireAuth>
					}
				/>
			</Routes>
		</Fragment>
	)
}

export default App
