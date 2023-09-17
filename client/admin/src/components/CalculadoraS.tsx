<<<<<<< HEAD
//import '../styless/CalculadoraS.css';
=======
// import '../styless/CalculadoraS.css';
>>>>>>> 410c88a3a2ef83bde1d5c44566264b8c6d5418ed
import Boton from './Boton';
import BotonClear from './BotonClear';
import Pantalla from './Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function CalculadoraS() {
    const [input, setInput] = useState('');
    const agregarInput = (val: string) => {
      setInput(input + val);
    };
    
    const calcularResultado = () => {
      if (input) {
        setInput(evaluate(input));
      } else {
        alert("Por favor ingrese valores para realizar los cálculos.");
      }
    };
  
    return (
      <div className='CalculadoraS'>
        <div className='contenedor-calculadora'>
        <span data-testid="resultado">{input}</span>  {}
          <Pantalla input={input}/>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>1</Boton>
            <Boton manejarClic={agregarInput}>2</Boton>
            <Boton manejarClic={agregarInput}>3</Boton>
            <Boton manejarClic={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>4</Boton>
            <Boton manejarClic={agregarInput}>5</Boton>
            <Boton manejarClic={agregarInput}>6</Boton>
            <Boton manejarClic={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>7</Boton>
            <Boton manejarClic={agregarInput}>8</Boton>
            <Boton manejarClic={agregarInput}>9</Boton>
            <Boton manejarClic={calcularResultado}>=</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput}>0</Boton>
            <Boton manejarClic={agregarInput}>.</Boton> 
            <BotonClear manejarClear={() => setInput('')}>C</BotonClear>
          </div>
        </div>
      </div>
    );
  }
  
  export default CalculadoraS;
  