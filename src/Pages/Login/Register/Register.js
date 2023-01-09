import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [agree,setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const navigateLogin = () =>{
        navigate('/login');
    }
    if(user){
        console.log(user);
    }

    const handleRegister = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email,password);
        await updateProfile({displayName: name});
        navigate('/home');
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign:'center'}}>Please Register here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder='Enter Your Name'/>
                
                <input type="email" name="email" placeholder='Your Email Address' required id="" />
                
                <input placeholder='Enter Your Password' required type="password" name="password" id="" />

                <input onClick={()=>setAgree(!agree)} type="checkbox" name="terms" id="terms" />

                <label className= {`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Services Terms and Conditions.</label>
              
                {/* <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Services Terms and Conditions.</label> */}
               
                <input
                disabled={!agree}
                 className='w-50 mx-auto btn btn-primary mt-2'
                 type="submit" value="register" />  
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