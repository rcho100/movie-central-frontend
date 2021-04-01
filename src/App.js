import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import NavigationBar from './components/NavigationBar';
import { getCurrentUser } from './actions/currentUser';
import PopularContainer from './containers/PopularContainer';
import TopRatedContainer from './containers/TopRatedContainer';
import Movie from './components/Movie';
import Watchlist from './components/Watchlist';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/popular-movies" component={PopularContainer} />
            <Route path="/movies/:id" component={Movie} />
            <Route exact path="/top-rated-movies" component={TopRatedContainer} />
            <Route exact path="/watchlist" render={(routerProps) => <Watchlist {...routerProps} currentUser={this.props.currentUser} />} />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
});

export default connect(mapStateToProps, { getCurrentUser })(App);
