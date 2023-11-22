import "./LoginStyle.css"
const SignUpPage = () => {

  return (
    <div className='Login'>
    <div class="wrapper">
    <h2>Registration</h2>
    <form action="#">
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Enter your Username</label>
    </div>
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Enter your Email Address</label>
    </div>
    <div class="group">      
      <input type="text" required/>
      <span class="highlight"></span>
      <span class="bar"></span>
      <label>Create Password</label>
    </div>
    <div class="group">      
      <input type="text" required/>
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