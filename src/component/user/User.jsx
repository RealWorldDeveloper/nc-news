import axios from 'axios'
import React, { useEffect, useState } from 'react'

function User() {
    const [user, setUser]= useState([])
    const userUrl = 'https://mynew-nc-news.onrender.com/api/users'

    useEffect(()=>{
        axios.get(userUrl)
        .then(res => {
            setUser(res.data.user);
        })
    },[])
  return (
    <div className="container mt-5" style={{animation: 'fadeIn 3s'}}>
      <div className="row d-flex justify-content-center">
        {user.map(users => {
            return(
                        <div className="col-md-4 mb-2" >
              <div className="card py-4 h-100"  >
                <div className="text-center">
                  <img
                    src={users.avatar_url}
                    width="100"
                    className="rounded-circle"
                  />
                </div>

                <div className="text-center mt-3">
                  <h5 className="mt-2 mb-0"></h5>

                  <div className="px-4 mt-1">
                    <h4 className="fonts fs-6">Name: {users.name}  </h4>
                  </div>

                  <div className="px-4 mt-1">
                    <p className="fonts fs-6">username: {users.username}</p>
                  </div>
                </div>
              </div>
            </div>
            )
        })}
    
       
      </div>
    </div>
  )
}

export default User