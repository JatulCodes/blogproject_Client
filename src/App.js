import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes} from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/Registrations/SignUp';
import Login from './components/Registrations/Login'
import Navbar from './components/navBar/Navbar';
import Blogdetail from './components/BlogDetailsPage/Blogdetail';
import FullPage from './components/Home/FullPage';
import SinglePost from './components/Home/SinglePost';
// import errorpage from './components/error/errorpage';
const App = () => {
  return (
    <>
    <Navbar/>
   
    <Routes>
    
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/SignUp" element={<SignUp/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/blogdetail" element={<Blogdetail/>} />
        <Route exact path="/fullPage" element={<FullPage/>}/>
        <Route  path="/BlogPost/:postId" element={<SinglePost/>}/>


        {/* <Route errorpage/> */}

    </Routes>
    
    </>
  )
}

export default App

//  Create a blogging site with following pages : 
// 1. Sign up : fields will be : Name, email, contact number, Create Password
// 2. Sign in : Email and Password
// 3. Blog listing page : Blog with following attributes - Image, Blog titles, 2 lines of description
// 4. Blog detail page : Blog with following attributes - Image, Blog titles, Description
// 5. Create Blog : Image, title and description. Use free editor for description

// Thanks,
// Alan