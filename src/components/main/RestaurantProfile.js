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
                <h4 className='othersWhoLiked'>Others Who Liked This Restaurant:</h4>
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
                <h4>Restaurant Reviews From Other Users:</h4>
                <div className='name'>
                <h6>Name</h6>
                <h6>Name 2</h6>
                </div>
                </div>
            </div>
        )
}


export default RestaurantProfile