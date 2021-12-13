import './Home.css'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<div className="intro">
				<h1>Grubbr</h1>
				<h4>"The Tinder For Food"</h4>
				<Link to='sign-up' style={linkStyle}>Sign Up</Link>
				<button>Create an Account</button>
				<p>Meet people in your area based on your common interests in restaurants...or not?</p>
			</div>
		</>
	)
}

export default Home
