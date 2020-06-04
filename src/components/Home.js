import React, { Component } from 'react'
import { connect } from 'react-redux'
import { popularMovies } from '../actions/movies'

class Home extends Component {
    componentDidMount() {
        this.props.popularMovies()
    }

    render() {
        return (
            <div>
                <h2>Movie Central</h2>
            </div>
        )
    }
}

export default connect(null, { popularMovies })(Home)