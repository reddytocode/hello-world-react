import logo from './logo.svg';
import './App.css';
import Ubicacion from './components/Ubicacion';

function Nombre() {
  return (
    <div>
      heolaa
    </div>
  );
  
}

function App() {
  const coodenadas = Ubicacion();
  return coodenadas.latitud == null ?(
    <div>Cargando......</div>
  ) : (
    <div className="App">
      <header className="App-header">
        coodenadas
         <h2>{coodenadas.latitud}</h2>
         <h2>{coodenadas.longitud}</h2>
      </header>
    </div>
  );
}

export default App;
