import '../css/RestaurantProfile.css'

const RestaurantProfile = (props) => {
    const restaurantCategories = props.likedRestaurant.categories
    const mapCategories = console.log(props.likedRestaurant)
    return (

        <div className='restaurantsProfile'>
            <div className='container'>
                <h1>{props.likedRestaurant.name}</h1>
                <img src={props.likedRestaurant.image_url} alt={props.likedRestaurant.name} />
                <h4>{mapCategories}</h4>

                <h6>Cuisine: {props.likedRestaurant.categories}</h6>
                <h6>Address: {props.likedRestaurant.location}</h6>
                <h6>Rating: {props.likedRestaurant.rating} Stars</h6>
                <h6>Price Rating: {props.likedRestaurant.price}</h6>
            </div>
            <div className='othersLiked'>
                <h3 className='othersWhoLiked'>Others Who Liked This Restaurant:</h3>
                <div className='nameMatch'>
                    {/* <img src={}/> */}
                    <label>Name</label>
                    <button>Add as Match</button>
                </div>
                <div className='nameMatch2'>
                    {/* <img src={}/> */}
                    <label>Name 2</label>
                    <button>Add as Match</button>
                </div>
            </div>
            <div className='othersLiked'>
                <h3>Restaurant Reviews From Other Users:</h3>
                <div className='name'>
                    <h6>Name</h6>
                    <h6>Name 2</h6>
                </div>
            </div>
        </div>
    )
}


export default RestaurantProfile