import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Cartoon3 extends Component {
  render () {
    return (
        <div>
        <div className="col-sm-6 col-sm-offset-3">
            <h1> Cartoon 3 </h1>
            <h2>Garfield - 3</h2>
            <p>It's time to clean refrigerator.</p>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon3-1" src="https://cartoon.sysadmin.payungsakpk.xyz/images/AllCartoon/Cartoon3/1.jpeg" width="256" height="256"/>
            </div>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon3-2" src="https://cartoon.sysadmin.payungsakpk.xyz/images/AllCartoon/Cartoon3/2.jpeg" width="256" height="256"/>
            </div>
            <div className="col-sm-6 col-sm-offset-3">
                <img alt="cartoon3-3" src="https://cartoon.sysadmin.payungsakpk.xyz/images/AllCartoon/Cartoon3/3.jpg" width="256" height="256"/>
            </div>
        </div>
        <div className="col-sm-6 col-sm-offset-3">
          <Link to="/cartoon1" className="navbar-brand">Cartoon 1</Link>
          <Link to="/cartoon2" className="navbar-brand">Cartoon 2</Link>
          <Link to="/allcartoon" className="navbar-brand">All Cartoon</Link>
        </div>
      </div>
    )
  }
}