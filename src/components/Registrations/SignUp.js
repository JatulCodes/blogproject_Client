import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

import './SignUp.css'


const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullname:"", email:"", contact:"", Password:"", CPassword:""})
     let name,value;
  const handleinput = (e)=>{
    // console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }
 const postData = async(e)=>{
      e.preventDefault()

   const {fullname, email, contact, Password, CPassword} = user

   const res = await fetch('/registerd',{
     method:"POST",
     headers:{
       "Content-Type" : "application/json"
     },
     body: JSON.stringify({
      fullname, email, contact, Password, CPassword
     })
   })
   const data = await res.json();
   if(data.status === 422 || !data){
     window.alert("invalid resgistration")
     console.log("invalid resgistration")
   }else{
    window.alert("Registration Successfull")
    console.log("Registration Successfull")

    navigate('/Login');
   }
 }
  return (
    <>
      <div className='formDiv'>
        <img className='registrationnImg' src="registration.png" alt="helloworld" />
        <form method='POST' className='form'>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Full Name</label>
            <input type="text" className="form-control" autoComplete='off' id="exampleInputEmail1" aria-describedby="emailHelp"
               value={user.fullname}
               onChange={handleinput}
            name="fullname" placeholder="Enter Name" />
            <small autoComplete='off' id="emailHelp" className="form-text text-muted">We'll never share your details with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Email</label>
            <input type="email" className="form-control" autoComplete='off' id="exampleInputPassword2"
               value={user.email}
               onChange={handleinput}
            name="email" placeholder="Enter Email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Phone</label>
            <input type="number" className="form-control" autoComplete='off' id="exampleInputPassword3"
               value={user.contact}
               onChange={handleinput}
            name="contact" placeholder="Enter Phone Number" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Create Password</label>
            <input type="password" className="form-control" autoComplete='off' id="exampleInputPassword4"
               value={user.Password}
               onChange={handleinput}
            name="Password" placeholder="Create Password" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Confirm Password</label>
            <input type="password" className="form-control" autoComplete='off' id="exampleInputPassword5"
               value={user.CPassword}
               onChange={handleinput}
            name="CPassword" placeholder="Confirm Password" />
          </div>
          <button type="submit" className="btn btn-primary mt-4" name="signup" onClick={postData}>Submit</button>
        </form>
      </div>
    </>

  )
}

export default SignUp