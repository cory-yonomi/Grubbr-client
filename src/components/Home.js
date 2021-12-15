import './Home.css'
import { Link } from 'react-router-dom'
import grubberLogo from './images/logo.png'

const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}
// const footerStyle = {
// 	backgroundColor: '#3E215D',
// 	height: '50px',
// 	color: 'grey',
// 	textAlign: 'center',
// }
// const aTagStyle = {
// 	margin: '10px'
// }
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<div className="home">
			<div className="intro">
				<h1><img src={grubberLogo} alt="fork and knife,Grubbr Logo"/> Grubber</h1>
				<h4>"The Tinder For Food"</h4>
				<button> <Link to='sign-up' style={linkStyle}>Create an Account</Link></button>
				<p>Meet people in your area based on your common interests in restaurants...or not?</p>
			</div>
		</div>
	)
}

export default Home
