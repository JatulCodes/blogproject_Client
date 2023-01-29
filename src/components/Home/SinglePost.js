import React, { useEffect, useState } from 'react'
import './BlogListing.css'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
const SinglePost = () => {
   const location =  useLocation();
        // console.log(location);
  const path = location.pathname.split('/')[2];

  const [post, setpost]=useState({})
  
   useEffect(()=>{
       const getData = async () => {
        const res = await axios.get("/"+ path) 
        console.log(res);
        setpost(res.data)
       };
       getData();
   },[path])

  return (
    <>
     <header className='header'><h1>{post.Title}</h1>  <h3>{post.Descriptions}</h3></header>
     <div className='text'>
     <b>
       {post.blogWriteing}
     </b>
     </div>
    </>
  )
}
export default SinglePost
