import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavigationBar = ({ currentUser }) => {
    return (
        <Navbar bg="primary" variant="light" expand='lg'>
            <Navbar.Brand href='/'></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                {Object.values(currentUser.user).length === 0 ?
                    <Nav className='ml-auto'>
                        <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/top-rated-movies">Top Movies</NavDropdown.Item>
                            <NavDropdown.Item href="/popular-movies">Popular Movies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><Nav.Link href='/login'>Login</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/signup'>Signup</Nav.Link></Nav.Item>
                    </Nav>
                        :
                    <Nav className='ml-auto'>
                        <Nav.Item><Nav.Link href='/'>Home</Nav.Link></Nav.Item>
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/top-rated-movies">Top Movies</NavDropdown.Item>
                            <NavDropdown.Item href="/popular-movies">Popular Movies</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><Nav.Link href='/watchlist'>My Watchlist</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href='/logout'>Logout</Nav.Link></Nav.Item>
                    </Nav>
                }
            </Navbar.Collapse>
            
        </Navbar>
    )
}

export default NavigationBar