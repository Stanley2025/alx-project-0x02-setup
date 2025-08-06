import { ButtonProps } from '@/interfaces';
import React from 'react';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  size = 'medium', 
  shape = 'rounded-md', 
  onClick 
}) => {
 
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-7 py-3 text-lg',
  };

  
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

 
  const buttonClasses = `
    bg-blue-600 text-white font-semibold
    hover:bg-blue-700
    transition-transform transform hover:scale-105
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
  `;

  return (
    <button className={buttonClasses.trim()} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;