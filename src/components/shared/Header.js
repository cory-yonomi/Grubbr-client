import './navBar.css'
import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const buttonStyle = {
	color: 'black',
	textDecoration: 'none',
	// marginLeft: '60vh',
    backgroundColor: '#E7D9EA',
    fontSize: 'large',
    fontWeight: '600',
    padding: '5px 40px',
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
	<Navbar className='navBar' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/restaurant-slide' style={linkStyle}>
                Grubbr
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
// below, goes after Link for Logo of "Grubbr"
// to='/'
export default Header
