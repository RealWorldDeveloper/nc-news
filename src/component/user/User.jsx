import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { apiClient } from '../../api'
import Nav from '../header/Nav'
function User() {
    const [user, setUser]= useState([])

    useEffect(()=>{
        apiClient.get('/users')
        .then(res => setUser(res.data.user))
    },[])
    console.log(user);
    
  return (
    <>
    {user.map(item => {
      return (<div class="card" style={{width: "18rem"}}>
  <img src={item.avatar_url}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>)
    })}
 
  </>
  )
}

export default User