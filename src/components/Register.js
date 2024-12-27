import React, { useState } from 'react';
import Signin from './SignIn'; 
import '../App.css'; 

function Register({ onLoginSuccess }) {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => setIsRegister(!isRegister);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h1>{isRegister ? 'Register' : 'Login'}</h1>
        <Signin isRegister={isRegister} onLoginSuccess={onLoginSuccess} />
        <p>
          {isRegister ? 'Already have an account?' : 'Don’t have an account?'}
          <span className="toggle-link" onClick={toggleForm}>
            {isRegister ? 'Login here' : 'Register here'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
