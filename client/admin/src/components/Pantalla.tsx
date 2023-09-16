import '../styless/Pantalla.css';

interface PantallaProps {
  input: string;
}

const Pantalla: React.FC<PantallaProps> = ({ input }) => (
  <div className='input'>
    {input}      
  </div>
);

export default Pantalla;
