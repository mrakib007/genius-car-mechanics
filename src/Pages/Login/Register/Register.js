import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
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
            <h2 style={{textAlign:'center'}}>Pleaser Register here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Enter Your Name'/>
                
                <input type="email" name="email" placeholder='Your Email Address' required id="" />
                
                <input placeholder='Enter Your Password' required type="password" name="password" id="" />
               
                <input type="submit" value="register" />  
            </form>
            <p>Already have an account?
            <Link to="/login" className="text-danger pe-auto text-decoration-none" onClick={navigateLogin}> 
          Please Login.
        </Link>
        </p>
        </div>
    );
};

export default Register;