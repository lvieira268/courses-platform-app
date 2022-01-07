import React, { useState, useCallback, ReactNode } from 'react';

import './styles.css';

interface IModal {
  isOpen: boolean;
  children: ReactNode;
  title: string;
}

const Modal: React.FC<IModal> = ({ isOpen = false, children, title }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const handleToggleModal = useCallback(() => {
    setModalOpen(state => !state);
  }, []);

  return (
    <div>
      {modalOpen && (
        <div className="modal-panel">
          <div className="head">
            <button type="button" onClick={() => handleToggleModal()}>
              <i className="bi bi-x" />
            </button>
            <p>{title}</p>
            <button type="button">
              <i className="bi bi-question-circle" />
            </button>
          </div>
          <div className="content-modal">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Modal;
