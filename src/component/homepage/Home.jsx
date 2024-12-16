import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
function Home() {
  const [article, Setarticle] = useState([])
  const url = 'https://mynew-nc-news.onrender.com/api/articles'
useEffect(()=>{
axios.get(url)
.then((res)=>{
Setarticle(res.data.article);
})
},[])

  return (
    <>
 <Card article = {article}/>
  </>
  )
}

export default Home