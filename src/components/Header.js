import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import auth from '../assets/images/auth.png';
import '../assets/styles/header.scss';

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
  return (
    <header className={`header ${scroll && 'fixed'}`}>
      <h1>
        <img src={logo} alt="Netflix" />
      </h1>
      <div className="auth">
        <img src={auth} alt="auth" />
      </div>
    </header>
  );
}

export default Header;
