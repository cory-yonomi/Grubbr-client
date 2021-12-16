import '../css/RestaurantProfile.css'

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
                <h6>Address: {props.likedRestaurant.location}</h6>
                <h6>Rating: {props.likedRestaurant.rating}</h6>
                <h6>Price Rating: {props.likedRestaurant.price}</h6>
            </div>
            <div className='bottomDiv'>
            <div className='othersLiked'>
                <h3>Others Who Liked This Restaurant:</h3>
            </div>
            <div className='othersReview'>
                <h3>Restaurant Reviews From Other Users:</h3>
            </div>
            </div>
        </div>
    )
}


export default RestaurantProfile