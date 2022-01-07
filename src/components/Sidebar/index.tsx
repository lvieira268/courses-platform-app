import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="nav-list">
        <Link to="/" className="nav-item top">
          <i className="bi bi-list icon" />{' '}
        </Link>
        <Link to="/dashboard" className="nav-item ">
          <i className="bi bi-house icon" />
        </Link>
        <Link to="/courses" className="nav-item ">
          <i className="bi bi-book icon active" />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
