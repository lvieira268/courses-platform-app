import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import coverCourse from '../../assets/cover-course1.png';
import coverCourse2 from '../../assets/cover-course2.png';

import './styles.css';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import InputImage from '../../components/InputImage';

const Courses: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Breadcrumb page="Treinamentos" />
      <div className="content">
        <div className="header">
          <p className="title">Seus treinamentos</p>
          <button
            className="btn-new-course"
            type="button"
            onClick={() => toggleModal()}
          >
            Novo treinamento
          </button>
        </div>
        <div className="box-container">
          <div className="card">
            <img src={coverCourse} alt="cover-course" />
            <div className="text-container">
              <p className="title-card">Curso de Svelte</p>
              <p className="description-card">
                Um curso para introdução ao Svelte com...
              </p>
            </div>
            <div className="actions-container">
              <div className="pill active">
                <p>habilitado</p>
              </div>
              <div className="icons">
                <button type="button" className="button-action">
                  <i className="bi bi-pencil-square icon-action primary" />
                </button>
                <button type="button" className="button-action">
                  <i className="bi bi-trash icon-action danger" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <img src={coverCourse2} alt="cover-course" />
            <div className="text-container">
              <p className="title-card">Curso de React</p>
              <p className="description-card">
                Como criar aplicativos utilizando React...
              </p>
            </div>
            <div className="actions-container">
              <div className="pill disable">
                <p>desabilitado</p>
              </div>
              <div className="icons">
                <button type="button" className="button-action">
                  <i className="bi bi-pencil-square icon-action primary" />
                </button>
                <button type="button" className="button-action">
                  <i className="bi bi-trash icon-action danger" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <Modal isOpen={modalOpen} title="NOVO TREINAMENTO">
          <InputImage />
          <Input name="name" label="Nome" type="text" />
          <Input name="description" label="Descrição" type="textarea" />
          <Input name="timing" label="Carga Horária" type="text" />

          <div className="modal-inputs">
            <Input name="active-course" label="Ativação do curso" type="text" />
            <Input
              name="disable-course"
              label="Desativação do curso"
              type="text"
            />
          </div>
          <button type="button" className="btn-create">
            CRIAR
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Courses;
