import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import LogoutModal from '../components/LogoutModal'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'

class NavigationBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addModalShow: false
        }
    }
    render() {
        let addModalClose = () => this.setState({
            addModalShow: false
        })

        return (
            <Navbar bg="primary" variant="light" expand='lg'>
                <Navbar.Brand href='/'>Movie Central</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    {Object.values(this.props.currentUser.user).length === 0 ?
                        <Nav className='ml-auto'>
                            <NavDropdown title="Movies" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/top-rated-movies">Top Movies</NavDropdown.Item>
                                <NavDropdown.Item href="/popular-movies">Popular Movies</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item><Nav.Link href='/login'>Login</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href='/signup'>Signup</Nav.Link></Nav.Item>
                        </Nav>
                            :
                        <Nav className='ml-auto'>
                            <NavDropdown title="Movies" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/top-rated-movies">Top Movies</NavDropdown.Item>
                                <NavDropdown.Item href="/popular-movies">Popular Movies</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item><Nav.Link href='/watchlist'>My Watchlist</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link href='#' onClick={() => this.setState({ addModalShow: true })}>Logout</Nav.Link></Nav.Item>
                            <LogoutModal show={this.state.addModalShow} onHide={addModalClose} logout={this.props.logout} />
                        </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default connect(null, { logout } )(NavigationBar)