import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate();
    const [fname, setFname]= useState('')
    const [lname, setlname]= useState('')

const submit = (e)=>{
    e.preventDefault()
    console.log(fname, lname);
    navigate('/home')
}
    return (
        <div className='box'>
            <div className='col'>
            <form onSubmit={(e) => submit(e)}>
            <div className="mb-3 mt-3">
    <label for="email" class="form-label">Email:</label>
    <input type="text" class="form-control" id="email" placeholder="Enter email" name="email" onChange={(e)=>setFname(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="pwd" class="form-label">Password:</label>
    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" onChange={(e)=>setlname(e.target.value)} />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
                </form>    
            </div>
        </div>
    )
}

export default Login
