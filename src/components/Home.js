import './Home.css'
import { Link } from 'react-router-dom'
import grubberLogo from './images/logo.png'
import background from './images/background.jpeg'

const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}
const backgroundStyle = {
	height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${background})`,
    textAlign: 'center',
    paddingTop: '10%',
    paddingBottom: '8%',
    color: 'white'
}

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div style={backgroundStyle} className="home">
			<div className="intro">
				<h1><img src={grubberLogo} alt="fork and knife,Grubbr Logo"/> Grubbr</h1>
				<h4>"The Tinder For Food"</h4>
				<button> <Link to='sign-up' style={linkStyle}>Create an Account</Link></button>
				<p>Meet people in your area based on your common interests in restaurants...or not?</p>
			</div>
		</div>
	)
}

export default Home
