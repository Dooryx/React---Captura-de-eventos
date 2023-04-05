import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <form onSubmit={presion}>
        <p>Ingrese texto:
          <input type="text" name="texto"  id='texto'/>
        </p>
        <p>
          <input type="submit" value="Alerta" />
        </p>
      </form>
    </div>
  );
}

function presion(e) {
  e.preventDefault();
  const v1=String(e.target.texto.value);
 
  const ver=v1;
  alert('Dice :'+ver);
}

export default App;