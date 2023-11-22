import React, { useContext } from 'react';
import "./LoginStyle.css"
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)

  return (
    <div className='Login'>
    <div className="wrapper">
    <h2>Login</h2>
    <form onSubmit={loginUser}>
      <div className="group">      
        <input type="text" name="username" required/>
        <label>Username</label>
      </div>
      <div className="group">      
        <input type="password" name="password" required/>
      <label>Password</label>
      </div>
        <div className="input-box button">
          <input type="submit" value="Log In"/>
        </div>
        <div className="text">
        <h3>Dont have an account? <a href="/signup">Sign Up Now</a></h3>
      </div>
    </form>
  </div>
  </div>
  );
};

export default LoginPage;