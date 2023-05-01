import './App.css';
import React, { useState } from 'react';

function App() {
    // formulario
    const [Atividade, setAtividade] = useState('')

    const handleChange = (e) => {
      // não deixa acontecer
      e.preventDefault();
    };

    return (
      <main>
        <div className='container'>
          <div className='container_titulo'>
            <h1>Task List</h1>
          </div>

           {/* formulario */}
          <form onSubmit={handleChange} className='container_form'>
            <input type='text' value={Atividade} onChange={(e) => setAtividade(e.target.Atividade)} placeholder='O que vamos fazer hoje? '></input>
            <button>Add Task</button>
          </form>
          {/* formulario */}

          {/* lista do to do */}
          <div className='container_list'></div>
          {/* lista do to do */}
        </div>
      </main>
  )
}
export default App;

