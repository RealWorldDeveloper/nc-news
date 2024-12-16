import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ArticleCard from './ArticleCard'
function Home() {
  const [article, setArticle] = useState([])
  const [isLoading,setLoading] = useState(false)
  const url = 'https://mynew-nc-news.onrender.com/api/articles'
useEffect(()=>{
  setLoading(true)
axios.get(url)
.then((res)=>{
setArticle(res.data.article);
setLoading(false)
})
},[])
if(isLoading){
    return <>Loading....</>
}
  return (
    <>
 <ArticleCard article = {article}/>
  </>
  )
}

export default Home