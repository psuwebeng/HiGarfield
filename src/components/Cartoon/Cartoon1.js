import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Cartoon1 extends Component {
  render () {
    return (
      <div>
        <div className="col-sm-6 col-sm-offset-3">
            <h1> Cartoon 1 </h1>
            <h2>Garfield - 1</h2>
            <p>Good eveing folks!!</p>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon1-1" src="/images/AllCartoon/Cartoon1/1.gif" width="256" height="256"/>
            </div>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon1-2" src="/images/AllCartoon/Cartoon1/2.gif" width="256" height="256"/>
            </div>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon1-3" src="/images/AllCartoon/Cartoon1/3.gif" width="256" height="256"/>
            </div>
        </div>
        <div className="col-sm-6 col-sm-offset-3">
          <Link to="/cartoon2" className="navbar-brand">Cartoon 2</Link>
          <Link to="/cartoon3" className="navbar-brand">Cartoon 3</Link>
          <Link to="/allcartoon" className="navbar-brand">All Cartoon</Link>
        </div>
      </div>
    )
  }
}