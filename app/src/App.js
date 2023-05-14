import './App.css'
import React, { useEffect, useState } from 'react';
import { api } from './Services/api';



function App() {
  const [Carregando, setCarregando] = useState(false)
  const [Atividades, setAtividades] = useState();
  const [novaAtividade, setnovaAtividade] = useState('');

  const valorInput = (e) => {
    setnovaAtividade(e.target.value);
  };

  const pegarAtividade = async () => {
    try {
        const res = await api.get("/")
        setAtividades(res.data)
        setCarregando(true)
        console.log(res.data)
        
    }
    catch (erro){
      console.log(erro)
    }
  }

  // const pegarAtividadeId = async (_id) => {
  //   try{
  //     const id = item._id
  //     const data = {
  //       _id: id
  //     }
  //     console.log(id)
  //     const res = await api.get("/", data)
  //     }

  //   catch (erro){
  //     console.log(erro)
  //   }
  // }

  const adicionarAtividade = async (_id) => {
    try {
      const data = {
        descricao: novaAtividade
      };
      const res = await api.post("/", data);
      console.log(res)
      setnovaAtividade('');

  }
    catch (erro){
      console.log(erro)
    }
    
    setnovaAtividade('');
  };

  const delAtividade = async (_id) => {
    try {
      console.log(_id)
      const data = {
        _id: _id
      };
      const res = await api.patch("/", data);
      console.log(res)
  }
    catch (erro){
      console.log(erro)
    }

  };

  useEffect(() => {
    pegarAtividade()
  },
  [])

  return (
    <main >
      <div className='container'>
        <div className='container-titulo'>
          <h1>Task List</h1>
        </div>
        <div className='container-form'>
          <input type="text" value={novaAtividade} onChange={valorInput} placeholder='O que deseja fazer hoje? ' />
          <button onClick={adicionarAtividade}>Adicionar</button>
        </div>
        <>
          {
          Atividades?.map((item, index) => (
            <div className='container-list' key={index}>
              <div className="container-list-atividades">
                  <h3>{item.descricao}</h3>
              </div>
              <div className='container-list-bttn'>
                <button onClick={() => delAtividade(item._id)}>Excluir</button>
                {/* <button onClick={() => setEditando(true)}>Editar</button> */}
              </div>
            </div>
          ))
          }
        </>
      </div>
    </main>
  );
}

export default App;




