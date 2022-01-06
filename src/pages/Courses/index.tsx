import React, { useState, useEffect, useCallback } from 'react';
import Breadcrumb from '../../components/Breadcrumb';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import './styles.css';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import InputImage from '../../components/InputImage';

import api from '../../services/api';

interface ICourses {
  id: number;
  title: string;
  description: string;
  available: boolean;
  image: string;
}

const Courses: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [courses, setCourses] = useState<ICourses[]>([]);

  useEffect(() => {
    async function loadCourses(): Promise<void> {
      await api.get('cursos').then(res => setCourses(res.data));
    }
    loadCourses();
  }, []);

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  const handleDeleteCourse = useCallback(
    async (id: number) => {
      await api.delete(`cursos/${id}`).then(() => {
        const updatedState = courses.filter(course => course.id !== id);
        setCourses(updatedState);
      });
    },
    [courses],
  );

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
          {courses &&
            courses.map(item => {
              return (
                <div className="card" key={item.id}>
                  <img src={item.image} alt="cover-course" />
                  <div className="text-container">
                    <p className="title-card">{item.title}</p>
                    <p className="description-card">{item.description}</p>
                  </div>
                  <div className="actions-container">
                    <div
                      className={`pill ${
                        item.available ? 'active' : 'disable'
                      }`}
                    >
                      <p>{item.available ? 'habilitado' : 'desabilitado'}</p>
                    </div>
                    <div className="icons">
                      <button type="button" className="button-action">
                        <i className="bi bi-pencil-square icon-action primary" />
                      </button>
                      <button
                        type="button"
                        className="button-action"
                        onClick={() => handleDeleteCourse(item.id)}
                      >
                        <i className="bi bi-trash icon-action danger" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
