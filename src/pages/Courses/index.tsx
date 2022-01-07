/* eslint-disable react/require-default-props */
import React, { useState, useEffect, useCallback } from 'react';
import { Path, useForm, UseFormRegister } from 'react-hook-form';

import Breadcrumb from '../../components/Breadcrumb';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

import './styles.css';
import Modal from '../../components/Modal';
import InputImage from '../../components/InputImage';

import api from '../../services/api';

interface ICourses {
  id: number;
  name: string;
  workload: string;
  description: string;
  available: Date;
  image: string;
}

type InputProps = {
  label: string;
  name: Path<ICourses>;
  description?: Path<ICourses>;
  workload?: Path<ICourses>;
  available?: Path<ICourses>;
  register: UseFormRegister<ICourses>;
  required: boolean;
};

const Input = ({ name, label, register, required }: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={`label-${label}`}>{label}</label>
      <input {...register(name, { required })} />
    </div>
  );
};

const TextArea = ({ name, label, register, required }: InputProps) => {
  return (
    <div className="input-container">
      <label htmlFor={`label-${label}`}>{label}</label>
      <textarea {...register(name, { required })} />
    </div>
  );
};

const Courses: React.FC = () => {
  const { register, handleSubmit } = useForm<ICourses>({});

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [courses, setCourses] = useState<ICourses[]>([]);

  async function loadCourses(): Promise<void> {
    await api.get('cursos').then(res => setCourses(res.data));
  }

  useEffect(() => {
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

  const onSubmit = useCallback(
    async (data: ICourses) => {
      const available = data.available && (await api.post('/cursos', data));
      setModalOpen(!modalOpen);
      loadCourses();
    },
    [modalOpen],
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
                    <p className="title-card">{item.name}</p>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputImage />
            <Input label="Nome" name="name" register={register} required />
            <TextArea
              label="Descrição"
              name="description"
              register={register}
              required
            />
            <Input
              label="Carga Horária"
              name="workload"
              register={register}
              required
            />

            <div className="modal-inputs">
              <Input
                label="Ativação do curso"
                name="available"
                register={register}
                required
              />
              <Input
                label="Desativação do curso"
                name="available"
                register={register}
                required
              />
            </div>
            <div className="button-container">
              <button type="submit" className="btn-create">
                CRIAR
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Courses;
