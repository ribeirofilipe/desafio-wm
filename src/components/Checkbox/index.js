import React from 'react';

import { Container } from './styles';

const Checkbox = ({ onChange, label, style }) => {
  return (
    <Container>
      <label style={ style }> 
        { label }
        <input onChange={ onChange } type="checkbox" />
        <span />
      </label>
    </Container>
  )
}

export default Checkbox;