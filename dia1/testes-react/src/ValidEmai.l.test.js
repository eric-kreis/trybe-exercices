import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testes ValidEmail.js', () => {
  it('Testando um componente, caso o email seja valido.', () => {
    const EMAIL_USER = 'email@email.com';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });

  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
    const isValid = getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
    expect(isValid).toHaveStyle('color: red');
  });
});
