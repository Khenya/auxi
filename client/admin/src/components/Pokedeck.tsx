import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import PokeCard from './PokeCard';

export default function Pokedeck() {
  
  const numbers = generateRandomNumbers();

  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
      >
        {
          numbers.map((number =>{
            return<PokeCard pokemonId={number}></PokeCard>
          }))
        }
      </Stack>
    </div>
  );
}