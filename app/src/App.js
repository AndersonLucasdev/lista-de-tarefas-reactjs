import './App.css'
import React, { useEffect, useState } from 'react';
import { api } from './Services/api';



function App() {
  const [Carregando, setCarregando] = useState()
  const [Atividades, setAtividades] = useState();
  const [novaAtividade, setnovaAtividade] = useState('');

  const pegarAtividade = async () => {
    try {
        const res = await api.get("/")
        setAtividades (res.data)
        console.log(res.data)
        setCarregando(true)
    }
    catch (erro){
      console.log(erro)
    }
  }

  useEffect(() => {
    pegarAtividade()
  })

  const valorInput = (e) => {
    setnovaAtividade(e.target.value);
  };



  // const Task = ({ task, indice }) => {
  //   const [Editando, setEditando] = useState(false);
  //   const [novoValor, setnovoValor] = useState(task);

  //   const handleEditInputChange = (e) => {
  //     setnovoValor(e.target.value);
  //   };

  //   const handleSaveClick = () => {
  //     editarAtividade(indice, novoValor);
  //     setEditando(false);
  //   };

  //   if (Editando) {
  //     return (
  //       <li>
  //         <input type="text" value={novoValor} onChange={handleEditInputChange} />
  //         <button onClick={handleSaveClick}>Salvar</button>
  //       </li>
  //     );
  //   }

  //   return (
  //     <li className='container_list_lista'>
  //       <p className='container_list_lista_tarefa'>
  //         {task}
  //       </p>
  //       <div className='container_list_lista_bttn'>
  //         <button onClick={() => setEditando(true)}>Editar</button>
  //         <button onClick={() => delAtividade(indice)}>Excluir</button>
  //       </div>
  //     </li>
  //   );
  // };

  return (
    <main >
      <div className='container'>
        <div className='container_titulo'>
          <h1>Task List</h1>
        </div>
        <div className='container_form'>
          <input type="text" value={novaAtividade} onChange={valorInput} placeholder='O que deseja fazer hoje? ' />
          <button>Adicionar</button>
        </div>
        {Carregando? (
          <>
          {/* <ul className='container_list'>
            {Atividades.map((item, index) => (
              <div className="container_list_atividades" key={index}>
                <p>{item.descricao}</p>
              </div>
            ))}
          </ul>  */}
          </>
        ):(
          <h1>Carregando...</h1>
        )}
      </div>
    </main>
  );
}

export default App;




