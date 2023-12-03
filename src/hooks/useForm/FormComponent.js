import React from 'react';
import useForm from './useForm';

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  }
  // Additional validation logic here
  return errors;
};

function MyForm() {
  const { errors, handleSubmit, handleReset, getInputProps } = useForm({ name: '', email: '' }, validate);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...getInputProps('name')} />
      {errors.name && <p>{errors.name}</p>}

      <input type="email" {...getInputProps('email')} />
      {errors.email && <p>{errors.email}</p>}

      <button type="submit">Submit</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}
