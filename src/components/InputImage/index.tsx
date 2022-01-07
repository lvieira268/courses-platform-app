import React, { useRef, useState } from 'react';

import './styles.css';

const InputImage: React.FC = () => {
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [image, setImage] = useState('');

  function onImageChange(event: { target: HTMLInputElement }) {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  function handleClick() {
    inputEl?.current?.click();
  }

  return (
    <div>
      {image ? (
        <>
          <button
            className="add-img"
            type="button"
            onClick={() => handleClick()}
          >
            <img alt="upload-img" src={image && image} />
          </button>
          <input
            accept="image/*"
            className="add-img"
            type="file"
            ref={inputEl}
            onChange={onImageChange}
            style={{
              display: 'none',
            }}
          />
        </>
      ) : (
        <>
          <button
            className="add-img"
            type="button"
            onClick={() => handleClick()}
          >
            <i className="bi-camera" />
            <p>Selecione uma imagem</p>
          </button>
          <input
            accept="image/*"
            className="add-img"
            type="file"
            ref={inputEl}
            onChange={onImageChange}
            style={{
              display: 'none',
            }}
          />
        </>
      )}
    </div>
  );
};

export default InputImage;
