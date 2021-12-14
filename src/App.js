import logo from './logo.svg';
import './App.css';
//import Ubicacion from './components/Ubicacion';
//import {Button} from '@mui/material';
import ListaMartin from './components/ListaMartin';
import { useEffect,useState } from 'react';
import { Container, Grid } from '@mui/material';

function Nombre() {
  return (
    <div>
      heolaa
    </div>
  );
  
}

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=2")
    .then((response)=>response.json())
    .then((data)=>setCharacters(data.results));
  }, [])

  useEffect(() => {
   console.log("characters", characters);
  }, [characters])


  const fake = {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    gender: "Male",
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3"
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  };

  return (
    <Container>
       Lista:
      <Grid container spacing={2} columns={16}>
       
        {characters.map((character) =>
          <ListaMartin character={character}/>)
        }
        
        {/* <ListaMartin character={fake}/> */}
        
        
        {/* <Button variant="contained">Text</Button> */}
        </Grid>
      </Container>
    
  );
}

export default App;
