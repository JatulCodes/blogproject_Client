import React, { useState,useEffect } from 'react'
import './BlogListing.css'

import Post from './Post'

const Home = () => {
      const [data, setdata] = useState([])

useEffect(() => {
  const getData = async () => {

      const response = await fetch("http://localhost:4000/BlogPost");
      setdata(await response.json());
      
  }
  getData();
}, []);

  return (
    <>
    <header>
        <h1 className='BlodHeading'>Latest Blogs</h1>
      
      </header>
      <div className='cardSection'>
      

         <Post data ={data}/>

      </div>
    </>
  )
}

export default Home;