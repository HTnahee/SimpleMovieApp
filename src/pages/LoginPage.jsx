import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (input) => {
    if (!input.includes('@')) {
      setEmailError('\n올바른 이메일을 입력해주세요');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);

    if (emailError === '') {
      console.log('로그인 성공!', { email, password });
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '40px', padding: '10px' }}>
        이메일과 비밀번호를 입력해주세요
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">이메일 주소</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <span style={{ color: 'red' }}>{emailError}</span>
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <br />
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="submit">확인</button>
        </div>
      </form>
    </div>
  );
}
