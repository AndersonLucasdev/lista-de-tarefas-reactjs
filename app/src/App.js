import './App.css'
import React, { useState } from 'react';

function App() {
  const [Atividades, setAtividades] = useState([]);
  const [novaAtividade, setnovaAtividade] = useState('');

  const valorInput = (e) => {
    setnovaAtividade(e.target.value);
  };

  const adicionarAtividade = () => {
    setAtividades([...Atividades, novaAtividade]);
    setnovaAtividade('');
  };

  const delAtividade = (indice) => {
    const novaAtividades = [...Atividades];
    novaAtividades.splice(indice, 1);
    setAtividades(novaAtividades);
  };

  const editarAtividade = (indice, novoValor) => {
    const novaAtividades = [...Atividades];
    novaAtividades[indice] = novoValor;
    setAtividades(novaAtividades);
  };

  const Task = ({ task, indice }) => {
    const [Editando, setEditando] = useState(false);
    const [novoValor, setnovoValor] = useState(task);

    const handleEditInputChange = (e) => {
      setnovoValor(e.target.value);
    };

    const handleSaveClick = () => {
      editarAtividade(indice, novoValor);
      setEditando(false);
    };

    if (Editando) {
      return (
        <li>
          <input type="text" value={novoValor} onChange={handleEditInputChange} />
          <button onClick={handleSaveClick}>Salvar</button>
        </li>
      );
    }

    return (
      <li className='container_list_lista'>
        <p className='container_list_lista_tarefa'>
          {task}
        </p>
        <div className='container_list_lista_bttn'>
          <button onClick={() => setEditando(true)}>Editar</button>
          <button onClick={() => delAtividade(indice)}>Excluir</button>
        </div>
      </li>
    );
  };

  return (
    <main >
      <div className='container'>
        <div className='container_titulo'>
          <h1>Task List</h1>
        </div>
        <div className='container_form'>
          <input type="text" value={novaAtividade} onChange={valorInput} placeholder='O que deseja fazer hoje? ' />
          <button onClick={adicionarAtividade}>Adicionar</button>
        </div>
        <ul className='container_list'>
          {Atividades.map((task, indice) => (
            <Task task={task} indice={indice} key={indice} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;




