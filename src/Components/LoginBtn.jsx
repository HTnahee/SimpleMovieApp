// LoginBtn.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginBtn() {
  const navigate = useNavigate();

  const handleLoginClick = () => {

    navigate('/loginpage'); 
  };

  return (
    <button className='header-nav-item' onClick={handleLoginClick}>
      로그인
    </button>
  );
}
