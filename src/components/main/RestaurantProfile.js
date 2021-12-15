import '../css/RestaurantProfile.css'

const RestaurantProfile = (props) => {
    const restaurantCategories = props.likedRestaurant.categories
    const mapCategories = console.log(props.likedRestaurant)
    return (
            <div className='restaurantsProfile'>
               <h1>{props.likedRestaurant.name}</h1>
               <img src={props.likedRestaurant.image_url} alt={props.likedRestaurant.name}/>
               <h4>{mapCategories}</h4>
               <div className='othersLiked'>
                <h2 className='othersWhoLiked'>Other Who Liked This Restaurant:</h2>
                </div>
            </div>
        )
}


export default RestaurantProfile