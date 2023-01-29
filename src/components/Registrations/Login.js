import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {

  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [Password, setPassword] = useState('')

  const logInUser = async (Event) => {
    Event.preventDefault()

    const res = await fetch('/singin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        Password
      })

    })
    const data = res.json()
    if (res.status === (400) || !data) {
      window.alert("invalid data")
    } else {
      window.alert("Login successfull")
      navigate('/')

    }

  }

  return (
    <>
      <div className='LoginformDiv'>
        <form method='POST'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email'
              onChange={(e) => setemail(e.target.value)} //calling function here
              value={email} placeholder='Enter Email Address' id="exampleInputEmail" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='Password'
              onChange={(e) => setPassword(e.target.value)} //calling function here
              value={Password} placeholder='Enter Password' id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={logInUser}>Submit</button>
        </form>
      </div>

    </>
  )
}

export default Login