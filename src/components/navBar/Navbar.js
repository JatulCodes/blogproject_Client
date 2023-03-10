import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <NavLink className="navbar-brand" to="/">Writing Blog</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navlinks" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link active" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/Blogdetail">Create Blogs</NavLink>
                        <NavLink className="nav-item nav-link" to="/Login">LogIn</NavLink>
                        <NavLink className="nav-item nav-link" to="/SignUp">SignUp</NavLink>

                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar