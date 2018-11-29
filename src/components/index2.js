import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, HashRouter, Link, Redirect, Switch } from 'react-router-dom'

import Login from './Login'
import Register from './Register'
import Home from './Home'
import AllCartoon from './protected/AllCartoon'
import About from './About'


import Cartoon1 from './Cartoon/Cartoon1'
import Cartoon2 from './Cartoon/Cartoon2'
import Cartoon3 from './Cartoon/Cartoon3'

import { logout } from '../helpers/auth'
import { firebaseAuth } from '../config/constants'


function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

function PublicRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to='/allcartoon' />}
    />
  )
}

export default class App extends Component {
  state = {
    authed: false,
    loading: true,
  }
  componentDidMount () {
    this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  componentWillUnmount () {
    this.removeListener()
  }
  render() {
    const routeInfo = [
        { displayName: 'ABOUT',
          link: '/about',
        },
        { displayName: 'HOME',
          link: '/home',
        },
        { displayName: 'CONTACT',
          link: 'https://www.mycontactform.com/',
        },
      ];
    return this.state.loading === true ? <h1>Loading</h1> : (
      <HashRouter>
        <div>
        <Navbar routeInfo={routeInfo} />
        {this.props.children}
          <div className="container">
            <div className="row">
              <Switch>
                <Route path='/' exact component={Home} />
                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                <Route  path='/about' component={About} />
                <PrivateRoute authed={this.state.authed} path='/allcartoon' component={AllCartoon} />
                <PrivateRoute authed={this.state.authed} path='/cartoon1' component={Cartoon1} />
                <PrivateRoute authed={this.state.authed} path='/cartoon2' component={Cartoon2} />
                <PrivateRoute authed={this.state.authed} path='/cartoon3' component={Cartoon3} />
                <Route render={() => <h3>No Match</h3>} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}