import React from 'react';

import './styles.css';

interface IInput {
  name: string;
  label: string;
  type: 'text' | 'textarea';
}

const Input: React.FC<IInput> = ({ name, label, type }) => {
  return (
    <div className="input-container">
      <label htmlFor={`label-${label}`}>{label}</label>
      {type === 'text' ? <input name={name} /> : <textarea />}
    </div>
  );
};

export default Input;
