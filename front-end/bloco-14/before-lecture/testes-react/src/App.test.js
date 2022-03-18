import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
  expect(isValid.style).toHaveProperty('color', 'green');
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
  expect(isValid.style).toHaveProperty('color', 'red');
});

test('Não mostra a mensagem de validação enquanto email nao for enviado', () => {
  render(<ValidEmail email={''} />);
  const validation = screen.queryByTestId("id-validation-email");
  expect(validation).not.toBeInTheDocument();
});