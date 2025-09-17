import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";




const LoginForm = ({useLogin,useDashboard}) => {
  return (
    <div className='parent'>
    <div className='wrapper'>
        <form action="">
            <h1>Students Portal</h1>
            <div className="input-box">
                <input type="text" placeholder='Scholar No.' required />
                <FaUser className='icon'/>
            </div>
            <div className="input-box">
                <input type="password" placeholder='Password' required />
                <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
                <label htmlFor=""><input type="checkbox" />Remember Me</label>
                <a href="#">Forgot password?</a>
            </div>
                <button type='submit'  onClick={()=>{useLogin(false); useDashboard(true)}}>Login</button>
        </form>
    </div>
    </div>
  )
}

export default LoginForm
