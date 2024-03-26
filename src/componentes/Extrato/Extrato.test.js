import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Deve renderizar uma lista de transações', () => {
  const transações = [
    {
      transacao: 'deposito',
      valor: 100,
    },
  ];

  render(<Extrato transacoes={transações} />);
  const lista = screen.getByRole('listitem');
  expect(lista).toBeVisible();
});
