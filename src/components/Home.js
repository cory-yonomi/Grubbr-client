import './Home.css'
const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<div className="intro">
				<h1>Grubbr</h1>
				<h4>"The Tinder For Food"</h4>
				<p>Meet people in your area based on your common interests in restaurants...or not?</p>
			</div>
		</>
	)
}

export default Home
