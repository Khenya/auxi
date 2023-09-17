<<<<<<< HEAD
//import '../styless/Pantalla.css';
=======
// import '../styless/Pantalla.css';
>>>>>>> 410c88a3a2ef83bde1d5c44566264b8c6d5418ed

interface PantallaProps {
  input: string;
}

const Pantalla: React.FC<PantallaProps> = ({ input }) => (
  <div 
    id={`result`}
    className='input'>
    {input}      
  </div>
);

export default Pantalla;
