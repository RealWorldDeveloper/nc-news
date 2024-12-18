import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
    <img
  src= 'logo.png'
  width="60"
  height="60"
  />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={'/'} className="nav-link"><strong>Home</strong></Link>
          </li>
          <li className="nav-item">
            <Link to={'/users'} className="nav-link"><strong>Users</strong></Link>
          </li>
          <li className="nav-item">
            <Link to={'/topics'} className="nav-link"><strong>Topics</strong></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
      </>
  )
}

export default Nav