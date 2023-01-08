import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        navigate('/home');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Enter Your Name'/>
                
                <input type="email" name="email" placeholder='Your Email Address' required id="" />
                
                <input placeholder='Enter Your Password' required type="password" name="password" id="" />

                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Genius Car Services Terms and Conditions.</label>
               
                <input className='w-50 mx-auto btn btn-primary mt-2' type="submit" value="register" />  
            </form>
            <p>Already have an account?
            <Link to="/login" className="text-primary pe-auto text-decoration-none" onClick={navigateLogin}> 
          Please Login.
        </Link>
        </p>

        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;