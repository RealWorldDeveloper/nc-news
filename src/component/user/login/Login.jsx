import React from 'react'

function Login() {
  return (
    <div className='container d-flex justify-content-center align-items-center flex-column'style={{height: '60vh'}}>
      <h1>User Login</h1>
    <form className='form w-50 border border-dark-subtle p-3 rounded-4'>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">user name</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      <div id="emailHelp" class="form-text">We'll never share your username with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default Login