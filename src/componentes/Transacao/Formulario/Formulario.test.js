import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Formulario from './index';

describe('Deve renderizar um campo input', () => {
  test('No documento', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toBeVisible();
  });

  test('Com o type number', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    expect(campoTexto).toHaveAttribute('type', 'number');
  });

  test('Que pode ser preenchido', () => {
    render(<Formulario />);
    const campoTexto = screen.getByPlaceholderText('Digite um valor');
    userEvent.type(campoTexto, '50');
    expect(campoTexto).toHaveValue(50);
  });
});

test('Deve realizar um evento de onSubimit ao clicar em realizar transação', () => {
  const realizarTransacao = jest.fn();

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole('button');

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});
