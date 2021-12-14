import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import grubberLogo from '../images/logo.png'

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
	fontSize: '20px',
	margin: '25px'
}

const logoStyle = {
	height: '40px',
	fontWeight: 'bold'
}
const buttonStyle = {
	color: 'black',
	textDecoration: 'none',
    backgroundColor: '#E7D9EA',
    fontSize: 'large',
    fontWeight: '600',
    padding: '5px 40px',
}
const navBarStyle = {
	backgroundColor: '#3E215D'
}

const authenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='restaurant-slide' style={linkStyle}>
				Slide
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        {/* <Nav.Link>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link> */}
        <Nav.Link align='right'>
		    <Link to='sign-in' style={buttonStyle}>Log In</Link>
        </Nav.Link>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link>
// 			<Link to='/' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

const Header = ({ user }) => (
	<Navbar style={navBarStyle} variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                <img src={grubberLogo} alt="" style={logoStyle}/> Grubbr
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
