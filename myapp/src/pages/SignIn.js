import React from 'react';
import { Link } from 'react-router-dom';


const SignIn = () => 
(
    <>
        <div>
            <h1>Please Login</h1>
            Username: <input type='text'/><br></br>
             Password: <input type='text'/><br></br>
            <button type='button'> Login </button>
            <p>Not a user? <Link to='/CreateAccount'>Click Here</Link> </p>
        </div>
    </>
);

export default SignIn;