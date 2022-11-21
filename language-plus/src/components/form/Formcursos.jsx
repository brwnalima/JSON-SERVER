import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs"

import './Formcursos.css'

const API = "https://language-plus.onrender.com"; //Endereço da API/json-sever//

function Formcursos() {

  const [curso, setCurso] = useState(""); //Captação do curso//
  const [modalidade, setModalidade] = useState(""); //Modalidade do curso//
  const [confere, setConfere] = useState([]); //Conferência e totalização de dados //
  const [loading, setLoading] = useState(false); //Leitor de dados//



  useEffect(() => {
    const loadData = async () => {  //Esta função carrega os dados que serão testados pelos métodos.//
      setLoading(true);

      const res = await fetch(API + "/cursos")
        .then((res) => res.json())   //Espera uma resposta e transforma em json.//
        .then((data) => data)       //Retorna os dados//
        .catch((err) => console.log(err));

      setLoading(false);

      setConfere(res);
    };

    // loadData(); >> CODIGO DANDO ERRO

  }, []);



  //Teste de envio para a API//
  const handleSubmit = async (e) => {
    e.preventDefault();

    const confere = {
      id: Math.random(),
      curso,
      modalidade,
      done: false,
    };

    await fetch(API + "/cursos", {
      method: "POST",
      body: JSON.stringify(confere),
      headers: {
        "Content-Type": "application/json"
      },
    });

    console.log(confere);

    setConfere((prevState) => [...prevState, confere]);           //Atualiza/Acrescenta um dado mantendo o anterior.//

    setCurso("");
    setModalidade("");
  };

  const handleDelete = async (id) => {

    await fetch(API + "/cursos/" + id, {
      method: "DELETE",
    });

    setConfere((prevState) => prevState.filter((confere) => confere.id !== id));
  };

  const handleEdit = async (confere) => {
    confere.done = !confere.done;

    const data = await fetch(API + "/cursos/" + confere.id, {
      method: "PUT",
      body: JSON.stringify(confere),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setConfere((prevState) => prevState.map((t) => (t.id === data.id) ? (t = data) : t));
  }

  const seletor = document.querySelector("#select")

  return (
    <div className="Formcursos">
      <div className='header-meucurso'>
        <h1>Agora é com você!</h1>
      </div>
      <div className='form-meucurso'>
        <h2>Meus cursos</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='curso'>O que você vai estudar?</label>
            <input type="text" name="curso" placeholder="Ex. Inglês" onChange={(e) => setCurso(e.target.value)} value={curso || ""} required />
          </div>
          <div className='form-control'>
            <label htmlFor='modalidade'>Modalidade</label>
            <input type="text" name="modalidade" placeholder="Ex. Live Class" onChange={(e) => setModalidade(e.target.value)} value={modalidade || ""} required />
          </div>
          

          <input type="submit" value="Enviar"></input> 
          
        </form>

      </div>
      <div className='list-meucurso'>
        <h2>Cursos selecionados:</h2>
        {confere.length === 0 && <p>Sem planos de estudo!</p>}
        {confere.map((meucurso) => (                             //Listagem/Exibição/Atualização dos cursos escolhidos(para o usuário)//
          <div className='meucurso' key={meucurso.id}>
            <h3 className={meucurso.done ? "meucurso.done" : ""}>Curso: {meucurso.curso}</h3>
            <p>Modalidade: {meucurso.modalidade}</p>
            <p>Esperamos por você.</p>
            <div className='actions'>
              <span onClick={() => handleEdit(meucurso)}>
                {!meucurso.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              <BsTrash onClick={() => handleDelete(meucurso.id)} />
            </div>
          </div>                                               //Condicional para confirmação de opção listada//                      
        ))}
      </div>
    </div>
  )
}

export default Formcursos

