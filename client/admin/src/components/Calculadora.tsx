import React, { useState } from 'react';

const Calculadora: React.FC = () => {
  const [numero1, setNumero1] = useState<string>('');
  const [numero2, setNumero2] = useState<string>('');
  const [resultado, setResultado] = useState<number | null>(null);

  const handleSumar = () => {
    if (numero1 === '' || numero2 === '') {
      alert('Por favor, ingrese dos números válidos.');
      return;
    }

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      alert('Por favor, ingrese dos números válidos.');
      return;
    }

    const suma = num1 + num2;
    setResultado(suma);
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <div>
        <input
          type="text"
          placeholder="Ingrese el primer número"
          value={numero1}
          onChange={(e) => setNumero1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese el segundo número"
          value={numero2}
          onChange={(e) => setNumero2(e.target.value)}
        />
        <button onClick={handleSumar}>Sumar</button>
      </div>
      {resultado !== null && (
        <div>
          <p>Resultado: {resultado}</p>
        </div>
      )}
    </div>
  );
};

export default Calculadora;
