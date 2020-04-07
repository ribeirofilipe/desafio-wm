import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { SelectInput } from './styles';

export default function Select({ 
  name, 
  value,
  options, 
  handleChange, 
  placeholder = "Todas", 
  placeholderTitle, 
  style,
  ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);
  
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <SelectInput 
      style={ style }
      ref={inputRef} 
      {...rest}
      onChange={ e => handleChange(e.target.value) }
      disabled={options.length < 1}
    >
      <option value="">{ placeholder }</option>
      {options.map(option => (
        <option 
          value={option.ID} 
          key={option.ID}>
          {option.Name || option.Make} 
        </option>
      ))}
    </SelectInput>
  );
}