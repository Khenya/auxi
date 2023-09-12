import { render, screen, fireEvent } from '@testing-library/react';
import Calculadora from '../../components/Calculadora';

// decimales
test('Maneja números decimales correctamente', () => {
  render(<Calculadora />);
  const input1 = screen.getByPlaceholderText('Ingrese el primer número');
  const input2 = screen.getByPlaceholderText('Ingrese el segundo número');
  const sumarButton = screen.getByText('Sumar');

  fireEvent.change(input1, { target: { value: '2.5' } });
  fireEvent.change(input2, { target: { value: '11.1' } });

  fireEvent.click(sumarButton);

  const resultadoText = screen.getByText((content) => {
    return content.startsWith('Resultado: 13.6');
  });

  expect(resultadoText).toBeTruthy();
});

// suma números positivos 
test('Suma números positivos correctamente', () => {
  render(<Calculadora />);
  const input1 = screen.getByPlaceholderText('Ingrese el primer número');
  const input2 = screen.getByPlaceholderText('Ingrese el segundo número');
  const sumarButton = screen.getByText('Sumar');
  
  fireEvent.change(input1, { target: { value: '5' } });
  fireEvent.change(input2, { target: { value: '3' } });
  
  fireEvent.click(sumarButton);

  const resultadoText = screen.getByText((content) => {
    return content.includes('Resultado: 8');
  });
  
  expect(resultadoText).toBeTruthy();
  });
  
// suma números negativos 
test('Suma números negativos correctamente', () => {
  render(<Calculadora />);
  const input1 = screen.getByPlaceholderText('Ingrese el primer número');
  const input2 = screen.getByPlaceholderText('Ingrese el segundo número');
  const sumarButton = screen.getByText('Sumar');
  
  fireEvent.change(input1, { target: { value: '-9' } });
  fireEvent.change(input2, { target: { value: '-4' } });
  
  fireEvent.click(sumarButton);
  
  const resultadoText = screen.getByText((content) => {
    return content.includes('Resultado: -13');
  });
  
  expect(resultadoText).toBeTruthy();
  });

// Maneja entradas no válidas correctamente
test('Maneja entradas no válidas correctamente', () => {
  render(<Calculadora />);
  const input1 = screen.getByPlaceholderText('Ingrese el primer número');
  const input2 = screen.getByPlaceholderText('Ingrese el segundo número');
  const sumarButton = screen.getByText('Sumar');
  
  fireEvent.change(input1, { target: { value: '-b' } });
  fireEvent.change(input2, { target: { value: 'c1' } });
  
  fireEvent.click(sumarButton);
  
  const alert = screen.queryByText('Por favor, ingrese dos números válidos');
  
  expect(alert).toBeNull();
});

