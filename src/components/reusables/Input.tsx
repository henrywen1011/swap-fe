import React, { FC } from 'react';
import classnames from 'classnames';

interface InputProps {
  type?: string; // Allows different input types (e.g., 'number', 'text')
  value?: string | number; // Input value, optional
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Optional onChange handler
  placeholder?: string; // Placeholder text
  customStyles?: string; // Custom styles passed as a string
  required?: boolean; // Whether the input is required
  min?: number; // Min value for numeric inputs
  max?: number; // Max value for numeric inputs
  step?: string; // Step value for numeric inputs
  disabled?: boolean; // Disable the input
  name?: string; // Name attribute
  id?: string; // ID attribute
}

const Input: FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  customStyles = '', // Default to an empty string to avoid undefined
  required = false,
  min,
  max,
  step,
  disabled = false,
  name,
  id,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classnames('input', customStyles)} // Combine input class with customStyles
      required={required}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      name={name}
      id={id}
    />
  );
};

export default Input;
