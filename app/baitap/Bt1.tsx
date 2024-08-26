//app/baitap/Bt1.tsx
'use client';  // Thêm dòng này để khai báo đây là một Client Component

import React from 'react';
import classNames from 'classnames';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive';
  size?: 'small' | 'large';
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'large', onClick, children }) => {
  const baseStyles = 'px-4 py-2 font-semibold rounded';

  const variantStyles = {
    primary: 'bg-blue-500 text-white',
    secondary: 'bg-gray-200 text-gray-900',
    destructive: 'bg-red-500 text-white',
  };

  const sizeStyles = {
    small: 'text-sm',
    large: 'text-lg',
  };

  const combinedStyles = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size]
  );

  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
