import { fireEvent, render, screen } from '@testing-library/react';
import CalculadoraS from '../../components/Calculadoras';

test('Se debe verificar que se realice una suma correctamente', () => {
  render(<CalculadoraS />);
  
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('='));
  
  const result = screen.getByTestId('resultado');  
  expect(result.textContent).toEqual('73');  
});

test('Se debe verificar que se realice una suma con numeros negativos correctamente', () => {
  render(<CalculadoraS />);
  
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('-'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('='));
  
  const result = screen.getByTestId('resultado');  
  expect(result.textContent).toEqual('11');  
});

test('Se debe verificar que se realice una suma con numeros decimales correctamente', () => {
  render(<CalculadoraS />);
  
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('.'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('.'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('='));
  
  const result = screen.getByTestId('resultado');  
  expect(result.textContent).toEqual('7.300000000000001');  
});
