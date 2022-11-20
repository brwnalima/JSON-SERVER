import { useState, useEffect } from 'react'
import {BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from "react-icons/bs"
import './Formcadastro.css'

const API = "http://localhost:3000";         //Endereço da API/json-sever//

function Formcadastro() {

  const [nome, setNome]= useState("");       //Captação dos dados//
  const [cpf, setCpf]= useState("");
  const [email, setEmail]= useState("");
  const [tel, setTel]= useState("");
  const [login, setLogin]= useState("");
  const [senha, setSenha]= useState("");
  const [confere, setConfere]= useState([]); //Conferência/Totalização do dados//
  const [loading, setLoading]= useState(false);


  //Leitura dos dados enviados//
  useEffect(()=> {
    const loadData = async () =>{  //Esta função carrega os dados que serão setados pelos métodos.//
      setLoading(true);

      const res = await fetch(API+"/curso")
      .then((res)=> res.json())    //Espera uma resposta e transforma em json.//
      .then((data)=> data)        //Retorna os dados//
      .catch((err)=> console.log(err));

      setLoading(false);

      setConfere(res);
    };

    loadData();
  }, []);

//Métodos//
  const handleSubmit = async (e) => {
    e.preventDefault();

    const  confere  ={
      id: Math.random(),
      nome,
      cpf,
      email,
      tel,
      login,
      senha,
      done: false,
    };
    
    await fetch(API+"/curso",{
      method: "POST",
      body: JSON.stringify(confere),
      headers:{
        "Content-Type": "application/json"
      },
    });

    console.log(confere);                           //Envio para a API//

    setConfere((prevState)=>[...prevState,confere]); //Atualiza/Acrescenta um dado mantendo o anterior.//

    setNome("");
    setCpf("");
    setEmail("");
    setTel("");
    setLogin("");
    setSenha("")
  };

  const handleDelete = async (id) =>{

    await fetch (API +"/curso/"+ id,{
      method: "DELETE",
      });

      setConfere((prevState)=> prevState.filter((confere) => confere.id !== id));
  };

  const handleEdit = async(confere) =>{
    confere.done = !confere.done;

    const data = await fetch (API +"/curso/"+ confere.id,{
      method: "PUT",
      body: JSON.stringify(confere),
      headers: {
        "Content-Type": "application/json",
      },
      });

      setConfere((prevState)=> prevState.map((t) => (t.id === data.id) ? (t = data) : t));
  }


  return (
    <div className="Formcadastro">
     <div className='header-meusdados'>
      <h1>Language +</h1>
     </div>
     <div className='form-meusdados'>
      <h2>Crie sua conta</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='cadastro'>Nome completo:</label>
          <input type="text" name="cadastro" placeholder="Ex. André Bastos" onChange={(e)=> setNome(e.target.value)} value={nome || ""} required/>
        </div>
        <div className='form-control'>
          <label htmlFor='cpf'>Digite seu CPF</label>
          <input type="number" name="cpf" placeholder="Ex.12345678910" onChange={(e)=> setCpf(e.target.value)} value={cpf || ""} required/>
        </div>
        <div className='form-control'>
          <label htmlFor='email'>Email</label>
          <input type="email" name="email" placeholder="Ex.abc@gmail.com" onChange={(e)=> setEmail(e.target.value)} value={email || ""} required/>
        </div>
        <div className='form-control'>
          <label htmlFor='tel'>Telefone</label>
          <input type="tel" name="tel" placeholder="Ex.99999999" onChange={(e)=> setTel(e.target.value)} value={tel || ""} required/>
        </div>
        <div className='form-control'>
          <label htmlFor='login'>Login</label>
          <input type="text" name="login" placeholder="Ex.André" onChange={(e)=> setLogin(e.target.value)} value={login || ""} required/>
        </div>
        <div className='form-control'>
          <label htmlFor='senha'>Senha</label>
          <input type="password" name="senha" placeholder="Ex.99999999" onChange={(e)=> setSenha(e.target.value)} value={senha || ""} required/>
        </div>

        <input type="submit" value="Começar"/>
      </form>

     </div>
      <div className='list-meusdados'>
        <h2>Minha conta</h2>
        {confere.length === 0 && <p>Sem cadastro!</p>}
        {confere.map((meusdados)=>(  //Listagem/Exibição/Atualização dos dados do usuário//
          <div className='meusdados' key={meusdados.id}>
           <h3 className={meusdados.done ? "meusdados.done" : ""}>Seus dados estão corretos?</h3> 
           <p>Nome completo:  {meusdados.nome}</p>
           <p>CPF: {meusdados.cpf}</p>
           <p>Email: {meusdados.email}</p>
           <p>Telefone: {meusdados.tel}</p>
           <p>Login: {meusdados.login}</p>
           <p>Senha: {meusdados.senha}</p>
           <div className='actions'> 
            <span onClick={()=> handleEdit(meusdados)}>
              {!meusdados.done ? <BsBookmarkCheck /> :<BsBookmarkCheckFill />}  
            </span>
            <BsTrash onClick={()=> handleDelete(meusdados.id) } />
            <input type="submit" value="Confirmar"></input>
           </div>
          </div> //Condicional para confirmação de opção listada//
        ))}
      </div>
    </div>
  )
}

export default Formcadastro
