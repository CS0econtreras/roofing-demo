import React from 'react';
import { Link } from 'react-router-dom';
import cvlogo from '../assets/images/cvlogo.png'

const Header = () => {
  return (
    <header class="topHeader">
      <div class="header-info">
        <img src={cvlogo} alt="Logo" className="header=logo" />
        <h1>CV Roofing</h1>
        <h2>(970)948-4860</h2>
      </div>
      <nav class="header-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
