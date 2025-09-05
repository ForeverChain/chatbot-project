import React from 'react';

const Input = ({ 
  label, 
  id, 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  error, 
  required = false, 
  className = '', 
  ...props 
}) => {
  const inputClasses = [
    'block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none sm:text-sm',
    error 
      ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
      : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500',
    className
  ].filter(Boolean).join(' ');

  return (
    <div>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className={inputClasses}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};

export default Input;