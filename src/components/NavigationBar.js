import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'

const NavigationBar = ({ currentUser, logout }) => {
    return (
        <Navbar bg="primary" variant="light" expand='lg'>
            <Navbar.Brand href='/'>Movie Central</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                {Object.values(currentUser).length === 0 ?
                    <Nav className='ml-auto'>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/top-rated-movies">Top Movies</NavDropdown.Item>
                            <NavDropdown.Item href="/popular-movies">Popular Movies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><Nav.Link href='/signup'>Signup</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/login'>Login</Nav.Link></Nav.Item>
                    </Nav>
                        :
                    <Nav className='ml-auto'>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/top-rated-movies">Top Movies</NavDropdown.Item>
                            <NavDropdown.Item href="/popular-movies">Popular Movies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><Nav.Link href='/watchlist'>My Watchlist</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link onClick={() => logout()} href='#'>Logout</Nav.Link></Nav.Item>
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