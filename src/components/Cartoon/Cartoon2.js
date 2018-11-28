import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Cartoon2 extends Component {
  render () {
    return (
        <div>
        <div className="col-sm-6 col-sm-offset-3">
            <h1> Cartoon 2 </h1>
            <h2>Garfield - 2</h2>
            <p>Do you want to go for a walk?</p>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon2-1" src="/images/AllCartoon/Cartoon2/1.gif" width="256" height="256"/>
            </div>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon2-2" src="/images/AllCartoon/Cartoon2/2.gif" width="256" height="256"/>
            </div>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon2-3" src="/images/AllCartoon/Cartoon2/3.gif" width="256" height="256"/>
            </div>
        </div>
        <div className="col-sm-6 col-sm-offset-3">
          <Link to="/cartoon1" className="navbar-brand">Cartoon 1</Link>
          <Link to="/cartoon3" className="navbar-brand">Cartoon 3</Link>
          <Link to="/allcartoon" className="navbar-brand">All Cartoon</Link>
        </div>
      </div>
    )
  }
}