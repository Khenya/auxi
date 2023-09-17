<<<<<<< HEAD
//import '../styless/Boton.css';
=======
// import '../styless/Boton.css';
>>>>>>> 410c88a3a2ef83bde1d5c44566264b8c6d5418ed

interface BotonClearProps {
  children: string;
  manejarClear: () => void;
}

const BotonClear: React.FC<BotonClearProps> = (props) => (
  <div className='boton-contenedor' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
