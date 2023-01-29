import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import './BlogListing.css'
const FullPage = ({post}) => {

  return (
    <>
          <div className="card">
            <img className="card-img-top" src="Character.png" alt="Card image cap" />
            <div className="card-body" >
              <Link to ={`/BlogPost/${post._id}`}>
              <h5 className="card-title">{post.Title}</h5>
              </Link>  
              <p className="card-text">{post.Descriptions}</p>
            </div>
       
            </div>
     
    </>
  )
}

export default FullPage

