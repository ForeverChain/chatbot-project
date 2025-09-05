import React from 'react';

const Form = ({ children, onSubmit, className = '', ...props }) => {
  const classes = [
    'space-y-6',
    className
  ].filter(Boolean).join(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <form className={classes} onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

const FormGroup = ({ children, className = '', ...props }) => {
  const classes = [
    'space-y-1',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Form.Group = FormGroup;

export default Form;