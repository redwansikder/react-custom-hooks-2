import { useState } from 'react';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Handle changes in form fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });

    // Validate on change
    if (validate) {
      setErrors({ ...errors, [name]: validate(name, value) });
    }
  };

  // Reset form to initial values
  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  // Validate form
  const validateForm = () => {
    if (!validate) return true;

    const newErrors = {};
    let isValid = true;
    for (const key in values) {
      const error = validate(key, values[key]);
      if (error) {
        isValid = false;
        newErrors[key] = error;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  // Get input field properties
  const getInputProps = (name) => ({
    name,
    value: values[name] || '',
    onChange: handleChange,
    // Additional props like onBlur can be added here if needed
  });

  return {
        errors,
    handleChange,
    resetForm,
    validateForm,
    getInputProps
  };
};
