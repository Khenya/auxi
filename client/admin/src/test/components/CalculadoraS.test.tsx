import { fireEvent, render, screen } from '@testing-library/react';
import CalculadoraS from '../../components/CalculadoraS';

test('Se debe verificar que se realice una suma correctamente', () => {
  render(<CalculadoraS />);
  
  fireEvent.click(screen.getByText('4'));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('='));
  
  const result = screen.getByRole('textbox') as HTMLInputElement;
  expect(result.value).toEqual('73');
});

// test('Se debe verificar que se realice una suma con números negativos correctamente', () => {
//   render(<CalculadoraS />);
  
//   fireEvent.click(screen.getByText('5'));
//   fireEvent.click(screen.getByText('0'));
//   fireEvent.click(screen.getByText('-'));
//   fireEvent.click(screen.getByText('2'));
//   fireEvent.click(screen.getByText('0'));
//   fireEvent.click(screen.getByText('='));
  
//   const result = screen.getByRole('textbox') as HTMLInputElement;
//   expect(result.value).toEqual('30');
// });

// test('Se debe verificar que se realizen sumas con números decimales correctamente', () => {
//   render(<CalculadoraS />);
  
//   fireEvent.click(screen.getByText('7'));
//   fireEvent.click(screen.getByText('.'));
//   fireEvent.click(screen.getByText('5'));
//   fireEvent.click(screen.getByText('+'));
//   fireEvent.click(screen.getByText('3'));
//   fireEvent.click(screen.getByText('1'));
//   fireEvent.click(screen.getByText('='));
  
//   const result = screen.getByRole('textbox') as HTMLInputElement;
//   expect(result.value).toEqual('7.5');
// });
