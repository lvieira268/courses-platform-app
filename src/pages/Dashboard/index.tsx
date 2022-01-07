import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import './styles.css';

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Breadcrumb page="" />
      <main>
        <i className="bi bi-book icon-main" />
        <p className="welcome">bem-vindo(a)</p>
        <p className="description">Aproveite sua plataforma de cursos</p>
      </main>
    </div>
  );
};

export default Dashboard;
