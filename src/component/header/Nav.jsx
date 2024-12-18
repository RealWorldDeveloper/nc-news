import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img
  src= 'logo.png'
  width="60"
  height="60"
  />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       
        <li className="nav-item fs-5">
            <Link to={'/'} className="nav-link">Home</Link>
          </li>
        <li className="nav-item fs-5">
            <Link to={'/users'} className="nav-link">Users</Link>
          </li>
        <li className="nav-item fs-5">
            <Link to={'/topics'} className="nav-link">Topics</Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
      </>
  )
}

export default Nav