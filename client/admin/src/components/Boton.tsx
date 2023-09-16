// import '../styless/Boton.css';

interface BotonProps {
  children: string;
  manejarClic: (val: string) => void;
}

const Boton: React.FC<BotonProps> = (props) => {
  const esOperador = (valor: string) => {
    return isNaN(Number(valor)) && valor !== '.' && valor !== '=';
  };

  return (
    <div
      id={`boton-${props.children}`}
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Boton;
