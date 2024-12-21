import React from 'react'
import { Link } from 'react-router-dom'
import { FcBusinessman } from "react-icons/fc";
function Nav() {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img
  src= '/logo.png'
  className="rounded-circle border border-dark-subtle p-1"
  height="60"
  loading="lazy"
  />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-2">
      <li className="nav-item fs-5">
       <Link to={'/'} className="nav-link">Home</Link>
       </li>
        <li className="nav-item fs-5">
           <Link to={'/topics'} className="nav-link">Topics</Link>
        </li>
        <li className="nav-item fs-5">
           <Link to={"/user/register"}className="nav-link">Register</Link>
        </li>
      </ul>
      <div class="d-flex">
      <Link to={'/user/login'} ><FcBusinessman fontSize={50} className='login border border-dark-subtle rounded-circle p-1'/></Link>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Nav


{/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <img
  src= 'logo.png'
  width="60"
  height="60"
  />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent ">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item fs-5">
       <Link to={'/'} className="nav-link">Home</Link>
       </li>
        <li className="nav-item fs-5">
           <Link to={'/topics'} className="nav-link">Topics</Link>
        </li>
           <li className="nav-item fs-5">
           <Link to={'/users'} className="nav-link">Login</Link>
        </li>
        <li className="nav-item fs-5">
           <Link to={'/users'} className="nav-link">Register</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav> */}