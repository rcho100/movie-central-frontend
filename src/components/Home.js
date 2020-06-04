import React, { Component } from 'react'
import { connect } from 'react-redux'
import { popularMovies } from '../actions/movies'
import PopularContainer from '../containers/PopularContainer'

class Home extends Component {
    componentDidMount() {
        this.props.popularMovies()
    }

    render() {
        return (
            <div>
                <h2>Movie Central</h2>
                <PopularContainer popMovies={this.props.popMovies}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        popMovies: state.popMovies
    }
}

export default connect(mapStateToProps, { popularMovies })(Home)