import { FiSearch } from 'react-icons/fi';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerinput">
        <input
          type="text"
          placeholder="Digite seu cep..."
        />

        <button className="buttonSearsh">
          <FiSearch zise={25} color="#000"/>
        </button>

        <main className='main'>
          <h2>CEP: 05574-440</h2>

          <span>Rua teste</span>
          <span>Complemento: Casa 2</span>
          <span>Bairro Bom</span>
          <span>Manaus - AM</span>

        </main>

      </div>
    </div>
  );
}

export default App;
