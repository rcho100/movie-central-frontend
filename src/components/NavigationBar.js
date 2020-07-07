import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const NavigationBar = ({ currentUser, logout }) => {
    const history = useHistory()

    const handleLogout = () => {
        logout()
        history.push('/')
    }

    return (
        <Navbar bg="primary" variant="light" expand='lg'>
            <Navbar.Brand as={Link} to='/'>Movie Central</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                {Object.values(currentUser).length === 0 ?
                    <Nav className='ml-auto'>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/top-rated-movies'>Top Movies</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/popular-movies'>Popular Movies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><Nav.Link as={Link} to='/signup'>Signup</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link as={Link} to='/login'>Login</Nav.Link></Nav.Item>
                    </Nav>
                        :
                    <Nav className='ml-auto'>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to='/top-rated-movies'>Top Movies</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to='/popular-movies'>Popular Movies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><Nav.Link as={Link} to='/watchlist'>My Watchlist</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => handleLogout()} >Logout</Nav.Link></Nav.Item>
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}

NavigationBar.defaultProps = {
    currentUser: {}
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser: currentUser.user
  }
}

export default connect(mapStateToProps, { logout } )(NavigationBar)