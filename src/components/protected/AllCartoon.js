import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class AllCartoon extends Component {
  render () {
    return (
      <div>
        This is All Cartoon Page.
        <li>
          <Link to="/cartoon1" className="navbar-brand">Cartoon 1</Link>
          <Link to="/cartoon2" className="navbar-brand">Cartoon 2</Link>
          <Link to="/cartoon3" className="navbar-brand">Cartoon 3</Link>
        </li>
      </div>
    )
  }
}