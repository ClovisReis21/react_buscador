import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';

import api from './services/api';

function App() {
  
  const [input, setInput] = useState('');

  async function handleSearch(){
    if ( input === '' ){
      alert("Preencha o campo CEP");
      return;
    }
    try{
      const response =  await api.get(`${input}/json`);
      console.log(response.data)
    }catch{
      alert("Erro")
    }
  }


  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
          value={input}
          onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch zise={30} color="#fff"/>
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
