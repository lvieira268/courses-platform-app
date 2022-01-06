import React from 'react';

import './styles.css';

const InputImage: React.FC = () => {
  return (
    <div className="add-img">
      <i className="bi-camera" />
      <p>Selecione uma imagem</p>
    </div>
  );
};

export default InputImage;
