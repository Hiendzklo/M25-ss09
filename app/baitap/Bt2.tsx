import React from 'react';

interface InputProps {
  type?: 'text' | 'number' | 'file';
  value?: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, placeholder, onChange }) => {
  return (
    <div className="mb-4">
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
};

export default Input;
