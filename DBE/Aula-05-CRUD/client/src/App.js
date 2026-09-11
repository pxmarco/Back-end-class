import './App.css';
import { useState } from 'react';
import CadastroAluno from './components/CadastroAluno';
import ListaAlunos from './components/ListaAlunos';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const refreshLista = () => {
    setRefreshKey((prev) => prev + 1);
  };

  return (
    <div className="App">
      <CadastroAluno onCadastro={refreshLista} />
      <ListaAlunos refreshKey={refreshKey} />
    </div>
  );
}

export default App;