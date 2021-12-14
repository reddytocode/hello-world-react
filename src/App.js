import './App.css';
// import Button from "@mui/material/Button";
import {Button,ButtonGroup, Heading} from "@chakra-ui/react";
import CharacterCard from "./components/CharacterCard"
import { useEffect,useState } from 'react';

function App() {
  const [characters,setCharacters]=useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((response)=>response.json())
    .then((data)=>setCharacters(data.results));
    
  }, [])
  useEffect(() => {
   console.log("characters",characters);
  }, [characters])
// const fake={

//   "id": 1,
//   "name": "Rick Sanchez",
//   "status": "Alive",
//   "species": "Human",
//   "type": "",
//   "gender": "Male",
//   "origin": {
//     "name": "Earth (C-137)",
//     "url": "https://rickandmortyapi.com/api/location/1"
//   },
//   "location": {
//     "name": "Citadel of Ricks",
//     "url": "https://rickandmortyapi.com/api/location/3"
//   },
//   "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
// }
  
  return (
    <div className="App-header">
    <Heading>Rick y Morty</Heading>
   {characters.map((character)=><CharacterCard character={character}/>)}
    
    </div>
    );
  }
  
export default App;
