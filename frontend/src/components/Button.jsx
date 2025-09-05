import React from 'react';

const Button = ({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center border font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'border-transparent shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'border-gray-300 shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:ring-indigo-500',
    danger: 'border-transparent shadow-sm text-white bg-red-600 hover:bg-red-700 focus:ring-red-500',
    success: 'border-transparent shadow-sm text-white bg-green-600 hover:bg-green-700 focus:ring-green-500',
  };
  
  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };
  
  const disabledClasses = 'opacity-50 cursor-not-allowed';
  
  const classes = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled ? disabledClasses : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;