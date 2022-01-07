import React from 'react';

import './styles.css';

import userIcon from '../../assets/user-icon.png';

const Header: React.FC = () => (
  <header>
    <div className="user-profile">
      <div className="user-identity">
        <p>Lucas Mendes</p>
        <small>Key account</small>
      </div>
      <img src={userIcon} alt="user" />
    </div>
  </header>
);

export default Header;
