import '../css/RestaurantProfile.css'

const RestaurantProfile = (props) => {
    const restaurantCategories = props.likedRestaurant.categories
    const mapCategories = console.log(restaurantCategories)
    return (
            <div className='restaurantsProfile'>
               <h1>{props.likedRestaurant.name}</h1>
               {/* <img src={props.likedRestaurant.image_url} alt={props.likedRestaurant.name}/> */}
               <h4>{mapCategories}</h4>
            </div>
        )
}


export default RestaurantProfile