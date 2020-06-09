import React, { Component } from 'react';
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Layout from './components/Layout'
import NavigationBar from './components/NavigationBar'
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PopularContainer from './containers/PopularContainer';
import TopRatedContainer from './containers/TopRatedContainer';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <>
        <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/signup' component={Signup}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/logout' component={Logout}/>
              <Route exact path='/popular-movies' component={PopularContainer}/>
              <Route exact path='/top-rated-movies' component={TopRatedContainer}/>
            </Switch>
          </Router>
        </Layout>
      </>
    )
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
