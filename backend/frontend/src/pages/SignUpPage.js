import React, {useState} from 'react'
import { useForm } from "react-hook-form"

const SignUpPage = ({history}) => {

  let [user, setUser] = useState(null)
  let createUser = async () => {
    fetch(`/register/`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    })
  }

  return (
    <div className='Login'>
    <div class="wrapper">
    <h2>Registration</h2>
      <form onSubmit={handleSubmit(createUser)}>
        <div class="group">      
          <input 
            type="text" 
            onChange={(e) => {setUser({...user, 'username': e.target.value})}}
            required
            {...register("username", { required: true, maxLength: {value: 8, message: "Username must be less than 10 characters"}})} 
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Enter your Username</label>
        </div>
        <div class="group">      
          <input 
            type="text" 
            onChange={(e) => {setUser({...user, 'email': e.target.value})}} 
            required
            {...register("email", { required: true, pattern: {value: /\S+@\S+\.\S+/, message: "Email is not valid"}})}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Enter your Email Address</label>
        </div>
        <div class="group">      
          <input 
            type="text" 
            onChange={(e) => {setUser({...user, 'password': e.target.value})}} 
            required
            {...register("password", { required: true, minLength: { value: 5, message: "Password is not valid" }, })}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Create Password</label>
        </div>
        <div class="group">      
        <input 
            type="text" 
            onChange={(e) => {setUser({...user, 'password2': e.target.value})}} 
            required
            {...register("password2", { required: true, minLength: { value: 5, message: "Password is not valid" }, })}
          />
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Confirm Password</label>
        </div>
        <div class="input-box button">
          <input type="Submit" value="Register Now"/>
        </div>
        <div class="text">
          <h3>Already have an account? <a href="/login">Login now</a></h3>
        </div>
      </form>
  </div>
  </div>
  );
};

export default SignUpPage;