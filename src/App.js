import './App.css';
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="App">
        <Button variant="text">Text</Button>
        <Button variant="contained" disabled>Contained</Button>
        <Button variant="outlined">Outlined</Button>

    </div>
  );
}

export default App;
