import React, { Component } from 'react'
import { connect } from 'react-redux'
import { popularMovies, topRatedMovies } from '../actions/movies'
import PopularContainer from '../containers/PopularContainer'
import TopRatedContainer from '../containers/TopRatedContainer'

class Home extends Component {
    componentDidMount() {
        this.props.popularMovies()
        this.props.topRatedMovies()
    }

    render() {
        return (
            <div>
                <h2>Movie Central</h2>
                <PopularContainer popMovies={this.props.popMovies}/>
                <TopRatedContainer topMovies={this.props.topMovies}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        popMovies: state.movies.popularMovies,
        topMovies: state.movies.topRatedMovies
    }
}

export default connect(mapStateToProps, { popularMovies, topRatedMovies })(Home)