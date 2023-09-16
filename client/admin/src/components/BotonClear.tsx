import '../styless/Boton.css';

const BotonClear = (props) => (
  <div className='boton-contenedor' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
