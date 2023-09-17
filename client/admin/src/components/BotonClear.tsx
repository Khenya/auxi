//import '../styless/Boton.css';


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
