import { FiSearch } from 'react-icons/fi';
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
        />

        <button className="buttonSearsh">
          <FiSearch zise={25} color="#000"/>
        </button>
      </div>

        <main className='main'>
          <h2>CEP: 05574-440</h2>

          <span>Rua teste</span>
          <span>Complemento: Casa 2</span>
          <span>Bairro Bom</span>
          <span>Manaus - AM</span>

        </main>

    </div>
  );
}

export default App;
